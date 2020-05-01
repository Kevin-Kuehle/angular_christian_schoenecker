import { EVENTS } from './db-data';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD2wNNVMjEIoge78iqcQTQyAcE4RhCZYNs",
  authDomain: "christian-schoenecker.firebaseapp.com",
  databaseURL: "https://christian-schoenecker.firebaseio.com",
  projectId: "christian-schoenecker",
  storageBucket: "christian-schoenecker.appspot.com",
  messagingSenderId: "1096325630568",
  appId: "1:1096325630568:web:94c74f4a87a8a001fec9dd",
  measurementId: "G-5278GD8SW1"
};

console.log("Uploading data to the database with the following config:\n");

console.log(JSON.stringify(config));

console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");

const app = firebase.initializeApp(config);
const db = firebase.firestore();

main().then(r => console.log('Done.'));

async function uploadData() {
  const events = await db.collection('Vitas');
  for (let event of Object.values(EVENTS)) {
    await events.add(event);
  }
}


async function main() {
  try {
    console.log('Start main...\n\n');
    await uploadData();
    console.log('\n\nClosing Application...');
    await app.delete();
  } catch (e) {
    console.log('Data upload failed, reason:', e, '\n\n');
  }
}
