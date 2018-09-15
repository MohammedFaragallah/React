import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDsjjTt3KzWQBaEH-gMeGzqR64cu4-woeM',
  authDomain: 'followreact.firebaseapp.com',
  databaseURL: 'https://followreact.firebaseio.com',
  projectId: 'followreact',
  storageBucket: 'followreact.appspot.com',
  messagingSenderId: '693849847226',
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
