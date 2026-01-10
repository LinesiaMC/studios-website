"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
    logo?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [logoError, setLogoError] = useState(false);
  
  // Construire le chemin du logo basé sur l'ID du projet
  const getLogoPath = () => {
    const baseUrl = "https://raw.githubusercontent.com/LinesiaMC/linesia-assets/main/";
    if (project.id === "linesia-eu" || project.id === "linesia-na") {
      return `${baseUrl}l_new.PNG`;
    }
    // Pour Renoria et Opale, utiliser le logo principal en attendant des logos spécifiques
    // Vous pouvez remplacer par les chemins exacts des logos dans leurs dossiers respectifs
    return `${baseUrl}l_new.PNG`;
  };

  const logoPath = getLogoPath();

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100/50"
    >
      {/* Gradient Header avec animation */}
      <div className={`h-2 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>

      <div className="p-8 relative z-10">
        {/* Effet de brillance au hover avec plus de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/0 via-primary-purple/0 to-primary-pink/0 group-hover:from-primary-violet/8 group-hover:via-primary-purple/8 group-hover:to-primary-pink/8 transition-all duration-500 rounded-2xl pointer-events-none" />

        {/* Header avec logo */}
        <div className="flex items-start gap-4 mb-4 relative z-10">
          {logoPath && !logoError && (
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4, type: "spring" }}
              className="relative w-14 h-14 flex-shrink-0 bg-gradient-to-br from-primary-violet/10 to-primary-pink/10 rounded-xl p-2 group/logo border border-primary-violet/20 shadow-lg"
            >
              <Image
                src={logoPath}
                alt={`${project.name} Logo`}
                width={56}
                height={56}
                className="object-contain transition-all duration-300 group-hover/logo:scale-110 filter drop-shadow-lg"
                onError={() => setLogoError(true)}
              />
              {/* Lueur animée au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-violet/30 to-primary-pink/30 rounded-xl opacity-0 group-hover/logo:opacity-100 transition-opacity blur-md"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-violet transition-colors">{project.name}</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-primary-violet/10 text-primary-violet rounded-full text-sm font-medium"
              >
                {project.type}
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === "Actif"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{project.description}</p>

        {/* Features */}
        <div className="mb-6 relative z-10">
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-600 group/item"
              >
                <motion.svg
                  className="w-5 h-5 text-primary-violet mr-2 group-hover/item:scale-110 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M5 13l4 4L19 7" />
                </motion.svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="relative z-10">
          {project.status === "En développement" && project.link.includes("discord") ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-violet to-primary-purple text-white rounded-full hover:from-primary-purple hover:to-primary-pink transition-all font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              Rejoindre le Discord →
            </motion.a>
          ) : project.link !== "#" && project.link.includes("discord") ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-violet to-primary-purple text-white rounded-full hover:from-primary-purple hover:to-primary-pink transition-all font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              Rejoindre Discord →
            </motion.a>
          ) : project.link !== "#" ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-violet to-primary-purple text-white rounded-full hover:from-primary-purple hover:to-primary-pink transition-all font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              Voir le projet →
            </motion.a>
          ) : (
            <button
              disabled
              className="inline-block px-6 py-3 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed font-semibold"
            >
              Bientôt disponible
            </button>
          )}
        </div>
      </div>

      {/* Hover Effect avec plus de profondeur et d'animation */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none rounded-2xl`}
        animate={{
          opacity: [0, 0.03, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Lueur au hover avec animation */}
      <motion.div
        className={`absolute -inset-2 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 rounded-2xl pointer-events-none`}
        animate={{
          opacity: [0, 0.15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Brillance animée permanente */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;

