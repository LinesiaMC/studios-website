"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Une question ? Une suggestion ? N&apos;hésitez pas à nous contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
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
                  Rejoignez notre serveur Discord pour discuter avec la communauté et l&apos;équipe, 
                  obtenir de l&apos;aide en temps réel et suivre les dernières actualités.
                </p>
                <a
                  href="https://discord.gg/linesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary-violet text-white rounded-full hover:bg-primary-purple transition-colors font-semibold"
                >
                  Rejoindre Discord →
                </a>
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
            <div className="bg-gradient-to-br from-primary-violet/10 via-primary-purple/10 to-primary-pink/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Informations</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nous nous efforçons de répondre à toutes les demandes dans les plus brefs délais. 
                  En général, vous recevrez une réponse par email sous 24-48 heures.
                </p>
                <p>
                  Pour les questions urgentes ou pour discuter directement avec notre équipe, 
                  n&apos;hésitez pas à nous rejoindre sur Discord où nous sommes généralement disponibles.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Besoin d&apos;aide ?</h3>
              <p className="text-gray-600 mb-4">
                Que ce soit pour un problème technique, une suggestion ou une question générale, 
                notre équipe est là pour vous aider.
              </p>
              <p className="text-gray-600">
                N&apos;hésitez pas à nous contacter, nous serons ravis de vous répondre !
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

