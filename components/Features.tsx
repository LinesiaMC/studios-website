"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎮",
    title: "Gameplay Innovant",
    description: "Des mécaniques de jeu uniques et des expériences captivantes.",
  },
  {
    icon: "🌍",
    title: "Communautés Actives",
    description: "Des serveurs animés avec des communautés passionnées et engagées.",
  },
  {
    icon: "⚡",
    title: "Performance Optimale",
    description: "Des serveurs performants pour une expérience de jeu fluide.",
  },
  {
    icon: "🎨",
    title: "Design Unique",
    description: "Des univers visuellement impressionnants et immersifs.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-light/40 via-white to-primary-light/40 relative overflow-hidden">
      {/* Pattern de fond animé */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Pourquoi Linesia Studios ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous créons des expériences de jeu exceptionnelles qui marquent les esprits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden group"
            >
              {/* Effet de brillance au hover avec plus de profondeur */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/0 via-primary-purple/0 to-primary-pink/0 group-hover:from-primary-violet/8 group-hover:via-primary-purple/8 group-hover:to-primary-pink/8 transition-all duration-500 rounded-2xl pointer-events-none" />
              
              {/* Lueur subtile */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary-violet/0 via-primary-purple/0 to-primary-pink/0 group-hover:from-primary-violet/20 group-hover:via-primary-purple/20 group-hover:to-primary-pink/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
              
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-violet transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

