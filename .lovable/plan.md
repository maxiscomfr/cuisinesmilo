# FAQ géolocalisée sur la page À propos

## Objectif
Ajouter une section FAQ à la page À propos pour capter les recherches locales
(ex. « cuisiniste Royan », « dressing sur mesure Charente-Maritime ») et rassurer
les visiteurs, sans changer le design existant.

## Contenu prévu

### Section FAQ (nouvelle, placée avant le bloc « Parlons de votre projet »)
Style identique au site : bordures fines, coins arrondis, sans dégradé.
Questions/réponses dépliables (une question visible à la fois, clic pour ouvrir).

Questions proposées (orientées SEO local) :
1. Intervenez-vous uniquement sur Royan ?
   → Royan et toute la Charente-Maritime : Saint-Palais-sur-Mer, Vaux-sur-Mer,
   Saujon, Meschers-sur-Gironde, La Tremblade… Autre zone : nous contacter.
2. Faites-vous uniquement des cuisines ?
   → Cuisines et dressings/placards sur mesure. Pas de salles de bains.
3. Travaillez-vous avec quel fabricant ?
   → Exclusivité Armony Cucine (cuisines italiennes), adaptées sur mesure.
4. Comment se déroule un projet, du premier contact à la pose ?
   → Contact → visite et mesures → conception et devis → fabrication et pose.
5. Le premier rendez-vous et le devis sont-ils payants ?
   → Premier échange et étude sans engagement, sur rendez-vous du lundi au samedi.
6. Quel est le délai moyen pour une cuisine sur mesure ?
   → Variable selon le projet ; délai précis annoncé au devis.

### SEO
- Données structurées FAQPage (JSON-LD) ajoutées à la page : les questions
  pourront apparaître directement dans les résultats Google.
- Les textes intègrent naturellement : cuisiniste, Royan, Charente-Maritime,
  cuisine et dressing sur mesure.

## Technique
- Modification de `src/routes/a-propos.tsx` uniquement : nouvelle section FAQ
  (composant accordéon simple en React, cohérent avec le style actuel) + script
  JSON-LD FAQPage dans la page.
- Métadonnées de la page légèrement enrichies (description) si pertinent.

## Validation
- Vérification visuelle dans l'aperçu (ouverture/fermeture des questions).
- Contrôle que le JSON-LD est bien présent dans le HTML rendu.
