"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white via-primary-light/30 to-white">
      {/* Background Gradient - Style linesia.net avec plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/10 via-primary-purple/8 to-primary-pink/10"></div>
      
      {/* Animated Background Elements avec plus d'animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-violet/20 to-primary-purple/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-primary-purple/20 to-primary-pink/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary-pink/20 to-primary-violet/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
              Linesia Studios
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Créateurs de serveurs Minecraft et Hytale innovants depuis 2021, nous développons des expériences de jeu uniques qui repoussent les limites du possible. 
              <br className="hidden md:block" />
              <span className="mt-2 inline-block">
                Notre vision s&apos;étend au-delà des serveurs : nous créons nos propres jeux pour offrir des univers encore plus immersifs et captivants.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#projets"
              className="px-8 py-4 bg-primary-violet text-white rounded-full hover:bg-primary-purple transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Découvrir nos projets
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white border-2 border-primary-violet text-primary-violet rounded-full hover:bg-primary-violet hover:text-white transition-all font-semibold text-lg"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-violet rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-primary-violet rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

