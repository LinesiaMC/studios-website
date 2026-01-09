"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData);
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Contactez-nous</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une question ? Une suggestion ? N'hésitez pas à nous contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-violet focus:border-transparent outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-violet focus:border-transparent outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-violet focus:border-transparent outline-none transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-violet focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 gradient-violet-pink text-white rounded-full hover:opacity-90 transition-opacity font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-violet/10 via-primary-purple/10 to-primary-pink/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Autres moyens de contact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    Site Web
                  </h3>
                  <a
                    href="https://linesia.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-violet hover:underline"
                  >
                    linesia.net
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">💬</span>
                    Discord
                  </h3>
                  <p className="text-gray-600">
                    Rejoignez notre serveur Discord pour discuter avec la communauté et l'équipe.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    Support
                  </h3>
                  <p className="text-gray-600">
                    Pour toute question technique ou demande de support, utilisez le formulaire de contact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Horaires de réponse</h3>
              <p className="text-gray-600 mb-4">
                Nous nous efforçons de répondre à toutes les demandes dans les plus brefs délais. 
                En général, vous recevrez une réponse sous 24-48 heures.
              </p>
              <p className="text-gray-600">
                Pour les questions urgentes, n'hésitez pas à nous contacter via Discord où notre 
                équipe est généralement disponible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

