"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    type: string;
    status: string;
    color: string;
    link: string;
    features: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-primary-violet/10 text-primary-violet rounded-full text-sm font-medium">
                {project.type}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === "Actif"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg
                  className="w-5 h-5 text-primary-violet mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        {project.status === "En développement" && project.link.includes("discord") ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-violet text-white rounded-full hover:bg-primary-purple transition-colors font-semibold"
          >
            Rejoindre le Discord →
          </a>
        ) : project.link !== "#" && project.link.includes("discord") ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-violet text-white rounded-full hover:bg-primary-purple transition-colors font-semibold"
          >
            Rejoindre Discord →
          </a>
        ) : project.link !== "#" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-violet text-white rounded-full hover:bg-primary-purple transition-colors font-semibold"
          >
            Voir le projet →
          </a>
        ) : (
          <button
            disabled
            className="inline-block px-6 py-3 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed font-semibold"
          >
            Bientôt disponible
          </button>
        )}
      </div>

      {/* Hover Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
      ></div>
    </motion.div>
  );
};

export default ProjectCard;

