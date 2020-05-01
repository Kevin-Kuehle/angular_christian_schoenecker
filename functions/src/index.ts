import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin';

import * as firebaseAccountCreentials from "./permission.json";
const serviceAccount = firebaseAccountCreentials as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://christian-schoenecker.firebaseio.com"
});

const app = express();
const db = admin.firestore();
app.use(cors({ origin: true }));



// change Biografie Data
app.post('database/change/biografie', (req, res) => {

  (async () => {

    try {
      // daten erfassen
      // daten in object packen
      // in datenbank updaten





      console.log('In datenbank gespeichert');
    } catch (error) {

      if (error) {
        console.log(error);
      }
    }
  })()
});




export const appFunction = functions.https.onRequest(app);









