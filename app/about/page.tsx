"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">À propos de Linesia Studios</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nous sommes une équipe passionnée dédiée à la création d'expériences de jeu exceptionnelles.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-primary-violet/10 via-primary-purple/10 to-primary-pink/10 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Chez Linesia Studios, nous croyons que chaque joueur mérite une expérience de jeu unique et mémorable. 
            Notre mission est de créer des serveurs qui repoussent les limites de l'innovation, tout en offrant 
            un gameplay agréable et une communauté accueillante.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nous nous efforçons constamment d'améliorer nos serveurs, d'écouter notre communauté et de développer 
            de nouvelles fonctionnalités qui rendent l'expérience de jeu encore plus passionnante.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Innovation",
              description: "Nous explorons constamment de nouvelles idées et mécaniques de jeu pour offrir des expériences uniques.",
              icon: "💡",
            },
            {
              title: "Qualité",
              description: "Chaque détail compte. Nous nous engageons à fournir des serveurs de la plus haute qualité.",
              icon: "⭐",
            },
            {
              title: "Communauté",
              description: "Notre communauté est au cœur de tout ce que nous faisons. Nous écoutons et grandissons ensemble.",
              icon: "🤝",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Linesia Studios est né de la passion pour créer des expériences de jeu exceptionnelles. 
              Depuis nos débuts, nous avons développé plusieurs serveurs Minecraft qui ont rassemblé 
              des milliers de joueurs autour d'expériences uniques.
            </p>
            <p>
              Aujourd'hui, nous continuons à innover avec des projets comme Renoria, notre serveur PvP 
              faction modé, et Opale, notre futur serveur Hytale. Chaque projet représente notre engagement 
              à repousser les limites et à offrir le meilleur à notre communauté.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

