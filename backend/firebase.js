require("dotenv").config();
const admin = require("firebase-admin");
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const fireJson = require("./firebase.json")

initializeApp({
  credential: admin.credential.cert(fireJson)
});

const auth = getAuth();

module.exports = {
  authAdmin: auth,
};
