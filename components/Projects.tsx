"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "linesia-eu",
    name: "Linesia EU",
    description: "Un serveur kitmap qui cherche la nouveauté et un gameplay agréable. L&apos;expérience ultime pour les joueurs européens.",
    type: "Kitmap",
    status: "Actif",
    color: "from-primary-violet to-primary-purple",
    link: "https://discord.gg/linesia",
    features: ["Gameplay innovant", "Communauté active", "Événements réguliers"],
  },
  {
    id: "linesia-na",
    name: "Linesia NA",
    description: "Le serveur kitmap en anglais avec une communauté adaptée. Parfait pour les joueurs nord-américains.",
    type: "Kitmap",
    status: "Actif",
    color: "from-primary-purple to-primary-pink",
    link: "https://discord.gg/linesia",
    features: ["Communauté internationale", "Support en anglais", "Gameplay optimisé"],
  },
  {
    id: "renoria",
    name: "Renoria",
    description: "Un serveur PvP faction modé complet. Plongez dans un monde de stratégie, de combat et d&apos;alliances.",
    type: "PvP Faction",
    status: "En développement",
    color: "from-primary-pink to-primary-violet",
    link: "https://discord.gg/linesia",
    features: ["Système de factions", "PvP intense", "Mods personnalisés"],
  },
  {
    id: "opale",
    name: "Opale",
    description: "Un futur serveur Hytale en développement. Soyez parmi les premiers à découvrir cette nouvelle aventure.",
    type: "Hytale",
    status: "En développement",
    color: "from-primary-violet via-primary-purple to-primary-pink",
    link: "https://discord.gg/linesia",
    features: ["Nouvelle plateforme", "En développement", "Bientôt disponible"],
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Nos Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos serveurs et leurs univers uniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

