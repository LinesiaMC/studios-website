# Linesia Studios - Site Vitrine

Site vitrine professionnel pour Linesia Studios, présentant tous les projets et serveurs du studio.

## 🎨 Caractéristiques

- Design moderne et professionnel avec les couleurs violet, blanc et rose
- Responsive design pour tous les appareils
- Animations fluides avec Framer Motion
- Structure claire et navigation intuitive
- Présentation de tous les projets (Linesia EU, Linesia NA, Renoria, Opale)

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── about/              # Page À propos
│   ├── contact/            # Page Contact
│   └── globals.css         # Styles globaux
├── components/
│   ├── Header.tsx          # En-tête avec navigation
│   ├── Footer.tsx          # Pied de page
│   ├── Hero.tsx            # Section hero
│   ├── Features.tsx        # Section caractéristiques
│   ├── Projects.tsx        # Section projets
│   └── ProjectCard.tsx     # Carte de projet
└── public/                 # Assets statiques
```

## 🎯 Pages

- **Accueil** (`/`) - Présentation du studio et de tous les projets
- **À propos** (`/about`) - Histoire et valeurs du studio
- **Contact** (`/contact`) - Formulaire de contact et informations

## 🎨 Personnalisation

Les couleurs principales sont définies dans `tailwind.config.ts` :
- Violet : `#8B5CF6`
- Purple : `#A855F7`
- Pink : `#EC4899`

## 📝 Notes

- Les liens vers les serveurs pointent actuellement vers `https://linesia.net`
- Vous pouvez personnaliser les liens Discord et autres réseaux sociaux dans le composant Footer
- Le formulaire de contact nécessite une configuration backend pour fonctionner complètement

## 🌐 Déploiement

Le site est hébergé via **Vercel**, la plateforme recommandée pour Next.js qui offre un déploiement automatique, 
des performances optimales et une intégration native avec GitHub.

---

© 2024 Linesia Studios. Tous droits réservés.

