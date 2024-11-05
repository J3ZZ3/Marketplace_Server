const firebase = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Firebase service account key

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const auth = firebase.auth();
const db = firebase.firestore();

module.exports = { auth, db };
