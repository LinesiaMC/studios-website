"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Particles for Dynamic Feel */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-violet/10 to-primary-purple/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-pink/10 to-primary-violet/5 rounded-full blur-3xl"
        />
        
        {/* Floating particles for more dynamism */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-violet/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
              className="px-8 py-4 bg-primary-violet text-white rounded-full hover:bg-primary-purple transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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

    </section>
  );
};

export default Hero;

