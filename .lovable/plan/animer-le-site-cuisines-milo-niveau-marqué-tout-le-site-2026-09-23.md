# Animer le site Cuisines Milo — niveau « marqué », tout le site

## Objectif
Rendre le site plus vivant tout en respectant la direction actuelle : sans-serif, palette sobre, bordures fines, coins 8–12 px, **aucun dégradé ni ombre**. Animations = fondu/glissement/échelle et mouvement de caméra, jamais de glow ni de flash.

## Approche technique
- Installer **Motion for React** (`motion`) — standard du secteur, compatible React 19 / SSR (rendu initial identique, animations côté client).
- Créer un petit jeu de primitives réutilisables dans `src/components/site/motion/` :
  - `Reveal` — apparait au défilement (fondu + translation verticale, une seule fois).
  - `Stagger` — enfants d'une grille/cartes qui apparaissent en cascade (décalage ~80 ms).
  - `Parallax` — déplacement lent d'une image au défilement (hero).
- Réutiliser/utiliser les utilitaires existants (`animate-fade-in`, `hover-scale`) là où Suffit.

## Ce qui s'anime, page par page

### Toutes les pages
- **Header** : le menu se déplie en douceur (menu mobile, dropdown Réalisations).
- **Boutons** : transition au survol légèrement plus affirmée (échelle 1.02 + couleur).
- **Liens de pied de page** : soulignement animé au survol (`story-link` déjà disponible).

### Accueil (/)
- **Hero** : titre, paragraphe et boutons apparaissent en cascade à l'arrivée ; image de fond en **léger zoom lent (Ken Burns)** + micro-parallaxe au défilement.
- **Réassurances** : les 3 cartes apparaissent en cascade.
- **Galerie aperçu** : grille en cascade (via `Stagger` dans `RealisationsGrid`).
- **Citation avis** : fondu + léger délai.
- **CTA final** : apparait au défilement.

### Réalisations (cuisines/dressings)
- Grille : apparition en cascade des vignettes.
- Survol vignette : zoom image déjà présent + légère montée de la carte.
- **Lightbox** : ouverture/fermeture animée (fondu + échelle), transition de fondu entre photos (flèches), compteur animé.

### Cuisines (/cuisines)
- Catalogue fabricant : portraits en cascade, zoom au survol.
- Galerie par modèle / lightbox : mêmes animations que Réalisations.
- Filtre par famille : transition douce lors du changement de filtre.

### À propos (/a-propos)
- Sections et FAQ : apparition au défilement ; ouverture/fermeture de l'accordéon animée en hauteur (Motion).

### Contact (/contact)
- Formulaire : apparition au défilement ; champs avec transition focus douce ; bouton d'envoi avec état de chargement animé (déjà partiel).

## Fichiers concernés
- `package.json` — ajout de `motion`
- Nouveau : `src/components/site/motion/Reveal.tsx`, `Stagger.tsx`, `Parallax.tsx`
- `src/routes/index.tsx`, `realisations.*.tsx`, `cuisines.tsx`, `a-propos.tsx`, `contact.tsx`
- `src/components/site/RealisationsGrid.tsx`, `ModelGallery.tsx`, `Section.tsx` (Section enveloppe optionnelle en `Reveal`)
- `src/routes/__root.tsx` — transition d'entrée de page (fondu court au changement de route)

## Performance & accessibilité
- Animations déclenchées une seule fois (pas de re-boucle au scroll).
- Respect de `prefers-reduced-motion` : tout est désactivé si l'utilisateur le demande (Motion le gère nativement via `useReducedMotion`).
- Pas de dégradation du SEO : contenu rendu côté serveur, animations purement visuelles.

## Vérification
- Typecheck + build.
- Parcours Playwright sur l'accueil, Réalisations, Cuisines et À propos : défilement, lightbox, filtre, FAQ — captures d'écran et absence d'erreurs console.
