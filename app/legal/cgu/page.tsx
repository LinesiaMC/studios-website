"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CGU() {
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
            Conditions Générales d'Utilisation
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités 
                et conditions d'utilisation des services proposés par Linesia Studios sur ses serveurs Minecraft 
                et Hytale, ainsi que sur son site web.
              </p>
              <p>
                Toute utilisation de nos services implique l'acceptation pleine et entière des présentes CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Acceptation des Conditions</h2>
              <p>
                En accédant et en utilisant nos services, vous reconnaissez avoir lu, compris et accepté d'être 
                lié par les présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Règles de Conduite</h2>
              <p>
                Tout utilisateur s'engage à respecter les règles suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ne pas utiliser de logiciels de triche, mods interdits ou exploits de bugs</li>
                <li>Respecter les autres joueurs et l'équipe de modération</li>
                <li>Ne pas diffuser de contenu illicite, offensant ou inapproprié</li>
                <li>Ne pas tenter de perturber le fonctionnement des serveurs</li>
                <li>Respecter la propriété intellectuelle de Linesia Studios et de ses partenaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Sanctions</h2>
              <p>
                En cas de non-respect des règles établies, Linesia Studios se réserve le droit d'appliquer 
                des sanctions pouvant aller de l'avertissement à la suspension définitive du compte, 
                sans remboursement des achats effectués.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Responsabilité</h2>
              <p>
                Linesia Studios s'efforce d'assurer une disponibilité continue de ses services mais ne 
                peut garantir un fonctionnement ininterrompu. Nous ne saurions être tenus responsables en cas de 
                perte de données, d'interruptions de service ou de dommages indirects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Propriété Intellectuelle</h2>
              <p>
                Tous les éléments des serveurs Linesia Studios (plugins, configurations, builds, etc.) sont la 
                propriété exclusive de Linesia Studios. Toute reproduction ou utilisation non autorisée est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Données Personnelles</h2>
              <p>
                Les données personnelles collectées sont traitées conformément à notre 
                <Link href="/legal/politique-confidentialite" className="text-primary-violet hover:underline"> Politique de Confidentialité</Link>. 
                En utilisant nos services, vous acceptez cette politique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Modification des Services</h2>
              <p>
                Linesia Studios se réserve le droit de modifier, suspendre ou interrompre tout ou partie des services 
                à tout moment, sans préavis. Nous ne saurions être tenus responsables des conséquences de ces modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Modification des CGU</h2>
              <p>
                Linesia Studios se réserve le droit de modifier les présentes CGU à tout moment. Il est recommandé 
                aux utilisateurs de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Contact</h2>
              <p>
                Pour toute question concernant les présentes CGU, vous pouvez nous contacter à :
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
