"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary-darker to-primary-dark text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-10 w-10">
                {!logoError ? (
                  <Image
                    src="https://raw.githubusercontent.com/LinesiaMC/linesia-assets/main/l_new.PNG"
                    alt="Linesia Studios Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">L</span>
                  </div>
                )}
              </div>
              <span className="text-2xl font-bold">Linesia Studios</span>
            </div>
            <p className="text-white/80 text-sm mb-2">
              Créateurs de serveurs Minecraft et Hytale innovants et passionnants.
            </p>
            <p className="text-white/90 text-sm font-semibold italic">
              &quot;Vivre pour créer, pas pour gagner&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#projets" className="text-white/80 hover:text-white transition-colors text-sm">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/cgv" className="text-white/80 hover:text-white transition-colors text-sm">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/legal/cgu" className="text-white/80 hover:text-white transition-colors text-sm">
                  Conditions Générales d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link href="/legal/politique-confidentialite" className="text-white/80 hover:text-white transition-colors text-sm">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal/mentions-legales" className="text-white/80 hover:text-white transition-colors text-sm">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Linesia Studios. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

