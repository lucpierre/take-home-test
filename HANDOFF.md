# Comment exécuter : Instructions de configuration et d'exécution
Le projet a conservé sa structure de base, le projet se lance grâce à :
```shell
npm run install:all && npm run dev
```
Afin de lancer les tests unitaires côté API :
```shell
cd server && npm run test
```

# Comment tester : Exemples d'appels API et réponses attendues
Afin de tester l'API on peut jouer le scénario suivant à l'aide de commandes curl :
```shell
curl --location 'http://localhost:3001/add' \
--header 'Content-Type: application/json' \
--data '{
    "url": "https://github.com/lucpierre/take-home-test"
}'
```

ce qui doit donner la réponse suivante :
```json
{
  "status": "ok",
  "message": "URL added successfully",
  "content": {
    "code": "<code-généré>",
    "url": "https://github.com/lucpierre/take-home-test"
  }
}
```

On peut alors ensuite naivement appeler la route suivante qui devrait rediriger vers la page Github du projet :
```shell
curl --location 'http://localhost:3001/<code-généré>'
```

# Détails d'implémentation : Décisions clés que vous avez prises (ex : "J'ai choisi la génération de code aléatoire parce que...")
J'ai choisi d'ajouter Jest est de réaliser un test unitaire pour m'assurer que la librairie choisie est bien fiable et je peux ainsi m'assurer dans une future CICD qu'aucune régression ne viendra impacter le projet.
J'ai également choisi de créer un wrapper pour les handlers des routes d'API pour pouvoir throw comme je veux dans le code et avoir un retour uniforme côté client quelque soit l'erreur levée.

# Limitations connues : Qu'est-ce que vous n'avez pas eu le temps de faire ? Qu'est-ce qui pourrait casser ?
Je n'ai pas eu le temps d'ajouter la validation de format avec Zod ou AJV afin de m'assurer que les données reçue par l'API sont bien valides.
Je n'ai pas pris le temps de valider que l'url ciblée est bien valide, ainsi si le lien donné est un lien mort alors, on redirigera quand même le visiteur vers le lien.
Je n'ai pas testé d'autres valeurs pour le nombre de digits utilisé par nanoid, celui-ci a été choisi de manière purement arbitraire.
La configuration d'eslint et prettier a été faite très rapidement et est surement un peu bancale.

# Considérations de production : Que changeriez-vous/ajouteriez-vous pour une utilisation réelle ?
La mise en place de `.env` afin d'éviter toutes les valeurs écrites en dur dans le code.
Du feedback utilisateur un peu plus précis avec une lecture claire des messages d'erreurs retournés par l'API avec les traductions qui vont bien.

# Améliorations futures : Si vous aviez une semaine de plus, qu'ajouteriez-vous ?
La création de dockerfile et docker-compose.yml pour faciliter la mise en place du projet avec notamment une basse de données digne de ce nom ainsi qu'un orm pour faciliter les intéractions avec cette dernière.
La mise en place d'une CICD qui vienne jouer les tests, build et déployer l'application.
L'ajout de Tailwind car, même s'il n'y a pas forcément beaucoup de choses à afficher, une interface un peu plus jolie c'est toujours plus agréable.