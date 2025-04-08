var admin = require("firebase-admin");

var serviceAccount = require("./herramientasoft-bae8e-firebase-adminsdk-fbsvc-c4f3376084.json");
const { error } = require("console");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const database = admin.firestore();

const bibliotecaREF = database.collection("biblioteca");