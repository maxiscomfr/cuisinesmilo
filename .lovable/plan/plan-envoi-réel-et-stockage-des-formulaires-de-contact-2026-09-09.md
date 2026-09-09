# Plan : envoi réel et stockage des formulaires de contact

## Objectif
Transformer le formulaire de contact actuellement factice en un formulaire qui :
1. enregistre chaque demande dans une base de données ;
2. envoie un email de notification à Cuisines Milo ;
3. offre un petit back-office pour consulter l'historique des demandes.

## Prérequis à valider avant le code

### 1. Activer Lovable Cloud
Le projet n'a pas encore de backend. Il faut activer Lovable Cloud pour obtenir une base PostgreSQL, l'authentification et les fonctions serveur.

### 2. Configurer un domaine d'envoi d'emails
Aucun domaine email n'est configuré. Les emails ne peuvent pas partir sans un domaine délégué appartenant au propriétaire (ex. `notify.cuisinesmilo.com`).

## Étapes d'implémentation

### Étape 1 — Backend et base de données
- Activer Lovable Cloud.
- Créer une migration qui ajoute la table `public.contact_submissions` :
  - `id` (uuid, clé primaire)
  - `name` (texte)
  - `email` (texte)
  - `message` (texte)
  - `created_at` (timestamp)
  - `replied_at` (timestamp, nullable)
  - `notes` (texte, nullable)
- Ajouter les `GRANT` nécessaires (`authenticated`, `service_role`) et activer RLS.
- Créer une politique RLS qui permet aux visiteurs anonymes d'insérer (`anon` INSERT) et au propriétaire authentifié de lire/modifier (`authenticated` SELECT/UPDATE).

### Étape 2 — Template email transactionnel
- Une fois le domaine email configuré, scaffolder le système de templates transactionnels (`email_domain--scaffold_transactional_email_templates`).
- Créer un template `contact-submission` qui résume la demande (nom, email, message) et l'envoie à l'adresse de Cuisines Milo.

### Étape 3 — Fonction serveur et formulaire
- Créer une server function `submitContact` qui :
  - valide les champs avec Zod (nom, email valide, message, limites de longueur) ;
  - insère la ligne dans `contact_submissions` ;
  - appelle `sendTemplateEmail` pour notifier Cuisines Milo ;
  - retourne un statut de succès ou une erreur contrôlée.
- Modifier `src/routes/contact.tsx` pour appeler `submitContact` à la soumission, afficher un état de chargement et un message de confirmation réel.

### Étape 4 — Back-office de consultation
- Créer une route protégée `/admin/messages` (sous `src/routes/_authenticated/`) qui :
  - liste les soumissions par date décroissante ;
  - permet de marquer une demande comme "répondue" ;
  - permet d'ajouter une note interne.
- Cette page nécessite une connexion administrateur ; la gestion des rôles (`user_roles`) sera incluse dans la migration.

### Étape 5 — Vérification
- Tester la soumission du formulaire en preview.
- Vérifier que l'email part et que la ligne apparaît dans le back-office.
- Vérifier le typecheck et le build.

## Livrables
- Formulaire de contact fonctionnel (validation + envoi + stockage).
- Email de notification reçu par Cuisines Milo à chaque soumission.
- Back-office `/admin/messages` protégé pour consulter et suivre les demandes.

## Blocages connus
- Sans Lovable Cloud : pas de base de données ni d'authentification.
- Sans domaine email vérifié : pas d'envoi d'email transactionnel.
