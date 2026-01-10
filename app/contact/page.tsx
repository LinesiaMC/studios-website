"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-primary-light/30 via-white to-primary-light/30 relative overflow-hidden min-h-screen">
      {/* Éléments de fond animés */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary-violet/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-pink/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une question ? Une suggestion ? N'hésitez pas à nous contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 relative overflow-hidden group"
          >
            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-violet/5 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contactez-nous</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="text-2xl mr-3">📧</span>
                      Email
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Pour toute question ou demande, vous pouvez nous envoyer un email à :
                    </p>
                    <a
                      href="mailto:support@linesia.net"
                      className="text-primary-violet hover:underline font-medium text-lg"
                    >
                      support@linesia.net
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <span className="text-2xl mr-3">💬</span>
                      Discord
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Rejoignez notre serveur Discord pour discuter avec la communauté et l'équipe, 
                      obtenir de l'aide en temps réel et suivre les dernières actualités.
                    </p>
                    <motion.a
                      href="https://discord.gg/phQYe9Uv7Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-primary-violet to-primary-purple text-white rounded-full hover:from-primary-purple hover:to-primary-pink transition-all font-semibold shadow-lg hover:shadow-xl"
                    >
                      Rejoindre Discord →
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-primary-violet/10 via-primary-purple/10 to-primary-pink/10 rounded-3xl p-8 md:p-12 shadow-xl border border-primary-violet/20 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Effet de brillance animé */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Informations</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Nous nous efforçons de répondre à toutes les demandes dans les plus brefs délais. 
                    En général, vous recevrez une réponse par email sous 24-48 heures.
                  </p>
                  <p>
                    Pour les questions urgentes ou pour discuter directement avec notre équipe, 
                    n'hésitez pas à nous rejoindre sur Discord où nous sommes généralement disponibles.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50 relative overflow-hidden group"
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-violet/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Besoin d'aide ?</h3>
                <p className="text-gray-600 mb-4">
                  Que ce soit pour un problème technique, une suggestion ou une question générale, 
                  notre équipe est là pour vous aider.
                </p>
                <p className="text-gray-600">
                  N'hésitez pas à nous contacter, nous serons ravis de vous répondre !
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

