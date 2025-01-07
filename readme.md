# Test Technique Hatis

Ce projet est une application fullstack comprenant un frontend en React et un backend en Express avec MongoDB. Le frontend consomme une API RESTful pour gérer les données de la table.

## Structure du projet


### Backend (Express + MongoDB)

/backend
├── app.js # Point d'entrée du serveur Express
├── models/ # Modèles de données
│ └── Table.js # Modèle de la table
├── routes/ # Routes de l'API
│ └── table.js # Route pour gérer la table
├── config/ # Configuration de la base de données
│ └── db.js # Configuration de la connexion MongoDB
├── package.json # Dépendances et configuration du backend

```
```

### Frontend (React)

/frontend
├── src/
│ ├── components/          # Composants React
│ │   ├── Table.js         # Composant de la table
│ │   ├── TableCell.js     # Composant des cellules de la table
│ ├── App.js               # Composant principal
│ ├── index.js             # Point d'entrée de l'application
│ └── styles.css           # Styles de l'application
├── package.json           # Dépendances et configuration du frontend

```

## Prérequis

- Node.js
- MongoDB (local ou Atlas)
- Yarn (pour le frontend)

## Installation

### Backend

1. Accédez au répertoire `/backend` :

   ```
   cd backend
   ```

2. Installez les dépendances backend :

   ```
   npm install
   ```

3. Configurez la connexion MongoDB dans `config/db.js` si nécessaire.

4. Démarrez le serveur backend :
   ```
   npm start
   ```

Le backend sera accessible sur `http://localhost:3000`.

### Frontend

1. Accédez au répertoire `/frontend` :

   ```
   cd frontend
   ```

2. Installez les dépendances frontend :

   ```
   yarn install
   ```

3. Démarrez l'application frontend :
   ```
   yarn start
   ```

Le frontend sera accessible sur `http://localhost:3000`.

## Fonctionnalités

- La table de données est alimentée par une API Express.
- Les utilisateurs peuvent modifier les cellules de la table.
- Le frontend envoie les modifications via Axios à l'API pour les sauvegarder dans MongoDB.

## Technologies utilisées

- **Frontend :**
  - React
  - Axios (pour les requêtes HTTP)
- **Backend :**
  - Express.js
  - MongoDB
  - Mongoose (ODM pour MongoDB)

## Auteur

[Najib]
