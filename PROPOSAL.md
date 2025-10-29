# Proposal
## Questions de clarification : Que demanderiez-vous s'il s'agissait d'un vrai projet ?
- Très rapidement, en quoi cet outil va vous simplifier la vie, car peut être y a t il une autre solution plus adéquate ?
- Quel type d'utilisateur est la cible ? Les développeurs ou personnes habitués aux outils informatiques savent utiliser un copier/coller ou les raccourcis clavier là où des personnes souvent plus agées préfèreront un bouton "Coller l'url"
- L'url générée doit elle répondre à des contraintes particulières de sécurité (hash particulier) ou de format (host particulier, longueur de l'url, ...)
- Est-il nécessaire de mettre une durée de vie au lien ?
- Y'a t il une liste ou un format d'URL qui ne doit pas être pris en compte par l'outil (nom de domaine en particulier, indicateur de pays...) ?
- Doit-on gérer les routes POST dans le MVP (transfère potentiel de body) ?
- Que faire en cas d'erreur sur la page ciblée (lien mort, erreurs http type 400/500, ...) ?
- Est-il nécessaire d'êtreauthentifier et doit on retrouver un portail de ses URLs générées pour ensuite pouvoir les administrer ?

## Périmètre du MVP : Qu'allez-vous construire en 3-4 heures ? Qu'est-ce qui est hors périmètre ?
- Une page web qui permet de saisir une url dans un formulaire (chaine de caractère), vérification du format très basique "http(s)://*".
- L'API stock dans une structure l'url avec le code qu'on lui attribue en tant que clé. L'API renvoie alors l'objet généré et le front affiche l'url créée avec la possibilité de cliquer dessus pour tester la redirection.
- Si on clique sur l'url générée, le front appel notre back qui redirige l'utilisateur vers la page ciblée.

Dans un premier temps, pas de fioriture, pas de CSS, juste une fonctionnalité pure et sa gestion naïve des erreurs.
- Code cherché non trouvé dans la base de données.
- Clé déjà existante.
Test de l'outil de création de code à l'aide d'un test unitaire Jest. L'idée est de créer un Set avec un million de clé à l'intérieur pour voir si le risque de collision est élevé ou non.

Si le temps le permet, ajout de divers éléments classé dans l'ordre dans lequel je les ferai :
1. Ajout de Tailwind afin de rendre le formulaire et la page un peu plus belle
2. Ajout d'un contrôle des données envoyées plus poussées avec Zod ou AJV pour la validation de format.

## Approche technique :
### Comment allez-vous générer les codes courts ? (aléatoire, hash, compteur, autre ?)
Utilisation de Nanoid, une librairie tierce qui permet de générer des codes de manière aléatoire.
Suivant la configuration utilisée le risque de collision est plutôt faible (c.f : https://zelark.github.io/nano-id-cc/). 

### Comment allez-vous gérer les collisions potentielles ?
L'utilisation de la bibliothèque tierce éprouvée permet de s'assurer en partie des non-collisions.
Dans le cas d'une erreur lié à un doublon, retour à l'utilisateur présentant pour s'excuser et l'inviter à réessayer.

### Quelle structure de données allez-vous utiliser pour stocker les correspondances ?
La structure retenue afin d'aller au plus vite est une Map qui associe le code généré en tant que clé à l'url ciblée.

### Décisions architecturales clés ?
- Utilisation d'une librairie externe pour la gestion des codes.
- Handler de gestion des erreurs afin de retourner une erreur formatée et exploitable par le front.

### Approches alternatives : Quelles autres façons pourriez-vous résoudre ce problème ? Pourquoi avez-vous choisi la vôtre ?
Utilisation de structures provenant de lib tierces comme loadash pour avoir des Maps plus completes mais ne nécessite pas forcément l'import d'une librairie en plus comparé au fait de gérer ça en quelques lignes à la main.


### Estimation du temps : Répartition approximative de l'utilisation des 2-3 heures de codage
30 mins de conception et réflexion sur les outils.
1h30 pour créer le MVP.
30 mins de documentation demandée.
30 mins d'amélioration divers .