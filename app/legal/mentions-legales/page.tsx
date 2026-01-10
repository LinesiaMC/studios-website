"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MentionsLegales() {
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
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Éditeur du Site</h2>
              <p className="text-gray-700">
                Le site <strong className="text-gray-900">studios.linesia.net</strong> est édité par :
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-900">Linesia Studios</strong>
                <br />
                Site web : <a href="https://studios.linesia.net" className="text-primary-violet hover:underline text-gray-700">studios.linesia.net</a>
                <br />
                Email : <a href="mailto:support@linesia.net" className="text-primary-violet hover:underline text-gray-700">support@linesia.net</a>
                <br />
                Discord : <a href="https://discord.gg/linesia" target="_blank" rel="noopener noreferrer" className="text-primary-violet hover:underline text-gray-700">Rejoindre notre Discord</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Hébergement</h2>
              <p className="text-gray-700">
                Le site est hébergé par :
                <br />
                <strong className="text-gray-900">Vercel Inc.</strong>
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Propriété Intellectuelle</h2>
              <p className="text-gray-700">
                L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes, etc.) est la propriété 
                exclusive de Linesia Studios, sauf mention contraire. Toute reproduction, même partielle, est 
                interdite sans autorisation préalable écrite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Responsabilité</h2>
              <p className="text-gray-700">
                Linesia Studios s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations 
                diffusées sur ce site. Toutefois, Linesia Studios ne peut garantir l&apos;exactitude, la précision 
                ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-700">
                En conséquence, Linesia Studios décline toute responsabilité pour toute imprécision, inexactitude 
                ou omission concernant les informations disponibles sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Liens Externes</h2>
              <p className="text-gray-700">
                Le site peut contenir des liens vers des sites externes. Linesia Studios n&apos;a aucun contrôle 
                sur ces sites et décline toute responsabilité quant à leur contenu ou leur fonctionnement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Protection des Données</h2>
              <p className="text-gray-700">
                Les données personnelles collectées sur ce site sont traitées conformément à notre 
                <Link href="/legal/politique-confidentialite" className="text-primary-violet hover:underline text-gray-700"> Politique de Confidentialité</Link> 
                et conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Droit Applicable</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :
                <br />
                Email : <a href="mailto:support@linesia.net" className="text-primary-violet hover:underline text-gray-700">support@linesia.net</a>
                <br />
                Discord : <a href="https://discord.gg/linesia" target="_blank" rel="noopener noreferrer" className="text-primary-violet hover:underline text-gray-700">Rejoindre notre Discord</a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="text-primary-violet hover:text-primary-purple transition-colors font-medium"
              >
                ← Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
