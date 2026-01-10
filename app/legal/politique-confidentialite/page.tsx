"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white via-primary-light/20 to-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
              <p>
                Linesia Studios accorde une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons 
                vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Données Collectées</h2>
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nom d'utilisateur Minecraft</li>
                <li>Adresse email (pour les commandes et communications)</li>
                <li>Adresse IP (pour la sécurité et la prévention des fraudes)</li>
                <li>Données de connexion aux serveurs</li>
                <li>Historique des transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Utilisation des Données</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gérer votre compte et vos commandes</li>
                <li>Améliorer nos services et votre expérience de jeu</li>
                <li>Assurer la sécurité de nos serveurs</li>
                <li>Vous contacter concernant vos commandes ou notre service</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Conservation des Données</h2>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités 
                pour lesquelles elles ont été collectées, ou conformément aux obligations légales. 
                Les données de connexion sont conservées pendant 12 mois maximum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Partage des Données</h2>
              <p>
                Linesia Studios ne vend, ne loue ni ne partage vos données personnelles à des tiers, 
                sauf dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>Avec nos prestataires de services (hébergement, paiement) sous contrat de confidentialité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Vos Droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : 
                <a href="mailto:support@linesia.net" className="text-primary-violet hover:underline"> support@linesia.net</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre 
                navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Modification de la Politique</h2>
              <p>
                Linesia Studios se réserve le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, contactez-nous à :
                <br />
                Email : <a href="mailto:support@linesia.net" className="text-primary-violet hover:underline">support@linesia.net</a>
                <br />
                Discord : <a href="https://discord.gg/phQYe9Uv7Q" target="_blank" rel="noopener noreferrer" className="text-primary-violet hover:underline">Rejoindre notre Discord</a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="text-primary-violet hover:text-primary-purple transition-colors font-medium"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
