"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CGV() {
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
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Préambule</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations entre Linesia Studios 
                et toute personne effectuant un achat sur nos plateformes (boutiques en ligne, serveurs Minecraft, etc.).
              </p>
              <p>
                Toute commande implique l&apos;acceptation sans réserve des présentes conditions générales de vente. 
                En cas de non-respect des conditions prévues ci-dessous, Linesia Studios se réserve le droit d&apos;annuler 
                ou de refuser la commande du client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Objet</h2>
              <p>
                Les présentes CGV s&apos;appliquent à la vente de produits numériques et de services liés à nos serveurs 
                Minecraft et Hytale, incluant mais sans s&apos;y limiter : coins, rangs, objets cosmétiques, packs, 
                et autres produits virtuels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Prix</h2>
              <p>
                Les prix de nos produits sont indiqués en euros (€) toutes taxes comprises (TTC). Linesia Studios se réserve 
                le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au catalogue le jour 
                de la commande sera le seul applicable à l&apos;acheteur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Commande et Paiement</h2>
              <p>
                La validation de votre commande vaut acceptation des présentes conditions, reconnaissance d&apos;avoir 
                pleine connaissance de celles-ci et renonciation à se prévaloir de ses propres conditions d&apos;achat.
              </p>
              <p>
                Les paiements sont sécurisés et peuvent être effectués par carte bancaire ou via les systèmes de paiement 
                en ligne proposés (PayPal, etc.). Une fois le paiement validé, les produits seront livrés automatiquement 
                sur le compte du joueur concerné.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Livraison</h2>
              <p>
                Les produits numériques sont livrés instantanément après validation du paiement. En cas de problème de 
                livraison, le client dispose d&apos;un délai de 48 heures pour contacter notre service client à 
                <a href="mailto:support@linesia.net" className="text-primary-violet hover:underline"> support@linesia.net</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Droit de Rétractation</h2>
              <p>
                Conformément à la législation en vigueur, les produits numériques ne sont pas soumis au droit de rétractation 
                dès lors que l&apos;exécution a commencé avec l&apos;accord exprès du consommateur.
              </p>
              <p>
                Toutefois, en cas d&apos;erreur manifeste de notre part ou de non-livraison du produit, un remboursement 
                pourra être envisagé dans les 14 jours suivant la commande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Utilisation des Produits</h2>
              <p>
                Les produits achetés sont liés au compte Minecraft du joueur spécifié lors de la commande. 
                Les transferts de produits entre comptes sont strictement interdits. Toute tentative de vente, 
                d&apos;échange ou de transfert de produits virtuels en dehors de nos plateformes est passible 
                de sanctions pouvant aller jusqu&apos;à la suspension définitive du compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Remboursements</h2>
              <p>
                Les remboursements sont traités au cas par cas et uniquement en cas d&apos;erreur de notre part 
                ou de problème technique empêchant la livraison du produit. Aucun remboursement ne sera effectué 
                pour un changement d&apos;avis du client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Propriété Intellectuelle</h2>
              <p>
                Tous les éléments du site, qu&apos;ils soient visuels ou sonores, y compris la technologie sous-jacente, 
                sont protégés par le droit d&apos;auteur, des marques ou des brevets. Ils sont la propriété exclusive de Linesia Studios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Modification des CGV</h2>
              <p>
                Linesia Studios se réserve le droit de modifier les présentes CGV à tout moment. Les nouvelles conditions 
                s&apos;appliquent aux commandes passées postérieurement à leur mise en ligne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Contact</h2>
              <p>
                Pour toute question concernant les présentes CGV, vous pouvez nous contacter à :
                <br />
                Email : <a href="mailto:support@linesia.net" className="text-primary-violet hover:underline">support@linesia.net</a>
                <br />
                Discord : <a href="https://discord.gg/linesia" target="_blank" rel="noopener noreferrer" className="text-primary-violet hover:underline">Rejoindre notre Discord</a>
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
