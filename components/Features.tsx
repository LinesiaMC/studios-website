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
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

