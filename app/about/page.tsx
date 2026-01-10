"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-primary-light/30 via-white to-primary-light/30 relative overflow-hidden min-h-screen">
      {/* Éléments de fond animés pour profondeur */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-primary-pink/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            À propos de Linesia Studios
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nous sommes une équipe passionnée dédiée à la création d&apos;expériences de jeu exceptionnelles depuis 2021.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01, y: -4 }}
          className="bg-gradient-to-br from-primary-violet/10 via-primary-purple/10 to-primary-pink/10 rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-primary-violet/20 backdrop-blur-sm relative overflow-hidden group"
        >
          {/* Effet de brillance animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Chez Linesia Studios, nous croyons que chaque joueur mérite une expérience de jeu unique et mémorable. 
              Notre mission est de créer des serveurs qui repoussent les limites de l&apos;innovation, tout en offrant 
              un gameplay agréable et une communauté accueillante.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous nous efforçons constamment d&apos;améliorer nos serveurs, d&apos;écouter notre communauté et de développer 
              de nouvelles fonctionnalités qui rendent l&apos;expérience de jeu encore plus passionnante. 
              Notre vision s&apos;étend au-delà des serveurs : nous créons nos propres jeux pour offrir des univers 
              encore plus immersifs et captivants, en repoussant toujours plus loin les limites de la créativité et de l&apos;innovation.
            </p>
          </div>
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
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/0 via-primary-purple/0 to-primary-pink/0 group-hover:from-primary-violet/8 group-hover:via-primary-purple/8 group-hover:to-primary-pink/8 transition-all duration-500 rounded-2xl pointer-events-none" />
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary-violet/0 to-primary-pink/0 group-hover:from-primary-violet/20 group-hover:to-primary-pink/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-violet transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.02, y: -6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 relative overflow-hidden group"
        >
          {/* Effet de brillance animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-violet/5 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Linesia Studios est né de la passion pour créer des expériences de jeu exceptionnelles. 
                Fondé en 2021, nous avons développé plusieurs serveurs Minecraft qui ont rassemblé 
                des milliers de joueurs autour d&apos;expériences uniques.
              </p>
              <p>
                Aujourd&apos;hui, nous continuons à innover avec des projets comme Renoria, notre serveur PvP 
                faction modé en développement, et Opale, notre futur serveur Hytale. Chaque projet représente 
                notre engagement à repousser les limites et à offrir le meilleur à notre communauté.
              </p>
              <p>
                En combinant notre expertise technique et notre passion pour le game design, nous créons 
                nos propres jeux pour offrir des univers encore plus immersifs. C&apos;est cette vision qui 
                nous pousse chaque jour à créer, innover et repousser les frontières du possible dans le monde du jeu vidéo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

