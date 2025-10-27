# Test Technique : Raccourcisseur d'URL

## Contexte

Vous allez créer un service de raccourcissement d'URL (comme bit.ly ou TinyURL). Les utilisateurs doivent pouvoir soumettre une URL longue et recevoir une version raccourcie qui redirige vers l'originale.

Votre mission est de construire un MVP de ce service avec une API backend et une interface frontend simple.

## Ce que nous recherchons

Nous valorisons le **code pragmatique et fonctionnel** plutôt que le code parfait. Nous voulons voir :

- Comment vous définissez un MVP à partir d'une spécification simple
- Vos décisions architecturales et vos compromis
- Du code propre et maintenable qui fait ce qu'il dit
- Comment vous gérez les cas limites et les erreurs

**Vous pouvez utiliser des outils d'IA comme Claude, ChatGPT, Copilot, etc.**

## Temps attendu

**Prévoyez 3-4 heures au total.** Si vous atteignez 3 heures et n'avez pas terminé, ce n'est pas grave - clôturez simplement et documentez ce qu'il reste à faire dans votre documentation de passation.

Nous respectons votre temps et n'attendons pas la perfection.

## Que construire

### Partie 1 : Proposition écrite (30-45 minutes)

Avant de coder, rédigez une brève proposition (`PROPOSAL.md`) qui inclut :

1. **Questions de clarification** : Que demanderiez-vous s'il s'agissait d'un vrai projet ?
2. **Périmètre du MVP** : Que allez-vous construire en 3-4 heures ? Qu'est-ce qui est hors périmètre ?
3. **Approche technique** :
   - Comment allez-vous générer les codes courts ? (aléatoire, hash, compteur, autre ?)
   - Comment allez-vous gérer les collisions potentielles ?
   - Quelle structure de données allez-vous utiliser pour stocker les correspondances ?
   - Décisions architecturales clés ?
4. **Approches alternatives** : Quelles autres façons pourriez-vous résoudre ce problème ? Pourquoi avez-vous choisi la vôtre ?
5. **Estimation du temps** : Répartition approximative de l'utilisation des 2-3 heures de codage

### Partie 2 : Implémentation (2-3 heures)

Construisez un MVP fonctionnel avec :

**Backend (Express + TypeScript) :**

- Une API REST pour créer des URLs raccourcies
- Un mécanisme de redirection vers les URLs originales
- Gestion appropriée des erreurs (URLs invalides, codes inexistants, etc.)
- Le stockage en mémoire est suffisant (pas besoin de vraie base de données)
- Vous choisissez le design de l'API (endpoints, méthodes HTTP, structure des réponses)

**Frontend (React + TypeScript) :**

- Un formulaire pour soumettre une URL
- Afficher l'URL raccourcie après création
- Gestion basique des erreurs et états de chargement
- Interface simple et fonctionnelle (nous ne jugeons pas le design)

**Stack technique :**

- Ce repo fournit un template de démarrage (Vite + React + TypeScript pour le frontend, Express + TypeScript pour le backend)
- Vous pouvez remplacer n'importe lequel de ces outils si vous pensez qu'autre chose offre des avantages (expliquez simplement pourquoi dans votre proposition)
- Vous pouvez ajouter toutes les bibliothèques dont vous avez besoin
- Le frontend est configuré pour proxifier les requêtes `/api` vers le backend

**Ce dont vous n'avez PAS à vous soucier :**

- Authentification/autorisation
- Persistance en base de données (en mémoire suffit)
- Déploiement en production
- Interface utilisateur magnifique (fonctionnel > joli)
- Codes courts personnalisés (auto-générés suffisent)
- Analytique/suivi des clics (nice-to-have, pas requis)

### Partie 3 : Documentation de passation (15 minutes)

Créez un bref `HANDOFF.md` qui inclut :

1. **Comment exécuter** : Instructions de configuration et d'exécution
2. **Comment tester** : Exemples d'appels API et réponses attendues
3. **Détails d'implémentation** : Décisions clés que vous avez prises (ex : "J'ai choisi la génération de code aléatoire parce que...")
4. **Limitations connues** : Qu'est-ce que vous n'avez pas eu le temps de faire ? Qu'est-ce qui pourrait casser ?
5. **Considérations de production** : Que changeriez-vous/ajouteriez-vous pour une utilisation réelle ?
6. **Améliorations futures** : Si vous aviez une semaine de plus, qu'ajouteriez-vous ?

## Livrables

Forkez ce dépôt et soumettez votre travail :

1. **Forkez ou clonez** ce repo sur votre propre compte GitHub/GitLab (ou contactez-nous si vous préférez ne pas le publier publiquement)
2. **Complétez le challenge** avec :
   - `PROPOSAL.md` - Votre proposition écrite
   - `HANDOFF.md` - Votre documentation de passation
   - Votre implémentation fonctionnelle
   - Historique de commits propre (pas besoin d'être parfait, mais lisible)
3. **Soumettez** le lien vers votre dépôt

## Critères d'évaluation

Nous évaluerons sur :

1. **Communication & Réflexion Produit (30%)**

   - Qualité des questions et hypothèses
   - Décisions de périmètre du MVP
   - Clarté de la documentation

2. **Jugement Technique (30%)**

   - Décisions architecturales et compromis
   - Stratégie de génération de code et gestion des collisions
   - Approche de gestion des erreurs
   - Estimations de temps réalistes

3. **Qualité du Code (25%)**

   - Propre, lisible, maintenable
   - Fonctionne comme spécifié
   - Abstractions appropriées (pas de sur-ingénierie)

4. **Pragmatisme (15%)**
   - Avez-vous construit un MVP ou essayé de tout construire ?
   - Utilisation raisonnable des bibliothèques vs code personnalisé
   - Focus sur ce qui compte

## Et après ?

Après votre soumission :

1. Nous examinerons votre soumission (sous 10 jours)
2. Si nous continuons, nous planifierons une visio de 45 minutes pour :
   - Parcourir votre code et vos décisions
   - Discuter d'extensions ("Comment ajouteriez-vous des analytics ?", "Comment cela scalera-t-il ?")
   - Échanger sur comment vous feriez évoluer cette fonctionnalité

## Questions ?

Si quelque chose n'est pas clair ou si vous avez besoin d'aide (problèmes techniques, clarifications, etc.), envoyez un email à jordan@platane.fr

---

**Bonne chance, et souvenez-vous : nous valorisons les décisions réfléchies plutôt que le code parfait.**
