import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin';
// @ts-ignore
const serviceAccount = require('./permission.json');


const app = express();
app.use(cors({ origin: true }));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://christian-schoenecker.firebaseio.com"
});


app.post('/api/create', (req, res) => {
  (async () => {

    try {

      await admin.firestore().collection('events').doc('/' + req.body.id + '/')
        .create({
          name: "First Post",
          id: req.body.id,
          description_: req.body.description,
          price: 250
        });

      return res.status(200).send();

    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  });
});

exports.app = functions.https.onRequest(app);








