/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// Firebase tech...
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


import * as v2 from 'firebase-functions/v2';
// import * as v1 from 'firebase-functions/1';

//login username & password...
export const login = v2.https.onRequest((request, response) => {
    const username = request.params[0];
});
