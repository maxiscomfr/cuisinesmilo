# Finaliser la configuration des emails

## Contexte
Le site est bien publié, mais la dernière publication date d'avant l'ajout du système d'envoi d'emails (notifications de contact vers contact@cuisinesmilo.com). Le domaine notify.cuisinesmilo.com est déjà vérifié — côté DNS, tout est bon.

## Ce qui bloque
Le message « Publish your app to finish email setup » indique que la version en ligne ne contient pas encore les nouvelles routes email. La publication actuelle est trop ancienne.

## Plan
1. Publier le site (cela déploie les routes email ajoutées récemment).
2. Dans Cloud → Emails, cliquer sur « Retry setup ».
3. Vérifier que le statut passe à actif, puis envoyer un message test depuis le formulaire de contact pour confirmer la réception dans la boite contact@cuisinesmilo.com.

## Aucune modification de code nécessaire
Le code est déjà en place et fonctionnel en preview — il manque seulement la publication.
