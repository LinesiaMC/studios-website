"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "linesia-eu",
    name: "Linesia EU",
    description: "Un serveur kitmap qui cherche la nouveauté et un gameplay agréable. L'expérience ultime pour les joueurs européens.",
    type: "Kitmap",
    status: "Actif",
    color: "from-primary-violet to-primary-purple",
    link: "https://discord.gg/linesia",
    features: ["Gameplay innovant", "Communauté active", "Événements réguliers"],
    logo: "https://raw.githubusercontent.com/LinesiaMC/linesia-assets/main/Linesia/",
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
    logo: "https://raw.githubusercontent.com/LinesiaMC/linesia-assets/main/Linesia/",
  },
  {
    id: "renoria",
    name: "Renoria",
    description: "Un serveur PvP faction modé complet. Plongez dans un monde de stratégie, de combat et d'alliances.",
    type: "PvP Faction",
    status: "En développement",
    color: "from-primary-pink via-primary-purple to-primary-violet",
    link: "https://discord.gg/dJeftzGx6P",
    features: ["Système de factions", "PvP intense", "Mods personnalisés"],
    logo: "https://raw.githubusercontent.com/LinesiaMC/linesia-assets/main/Renoria/",
  },
  {
    id: "opale",
    name: "Opale",
    description: "Un futur serveur Hytale en développement. Soyez parmi les premiers à découvrir cette nouvelle aventure.",
    type: "Hytale",
    status: "En développement",
    color: "from-primary-pink via-primary-violet to-primary-purple",
    link: "https://discord.gg/5MJzBAWEdS",
    features: ["Nouvelle plateforme", "En développement", "Bientôt disponible"],
    logo: "https://raw.githubusercontent.com/LinesiaMC/linesia-assets/main/Opale/",
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 bg-gradient-to-b from-primary-light/30 via-white to-primary-light/30 relative overflow-hidden">
      {/* Pattern de fond animé */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      {/* Éléments flottants pour profondeur */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-primary-violet/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-64 h-64 bg-primary-pink/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Effet de grille animé en arrière-plan */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
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

