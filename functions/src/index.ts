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


app.post('/api/create', (req, res) => {


  void (async () => {

    try {
      await db.collection('events').doc(`/${req.body.id}/`)
        .set({
          name: "First Post",
          id: req.body.id,
          description_: req.body.description,
          price: req.body.price
        });

      return res.status(200).send();

    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }

  })();
});

export const appFunction = functions.https.onRequest(app);









