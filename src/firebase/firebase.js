import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAUXjGj_JDsEgCyALu79BfPOH5TEYVkWEU",
    authDomain: "expensify-1a37c.firebaseapp.com",
    databaseURL: "https://expensify-1a37c.firebaseio.com",
    projectId: "expensify-1a37c",
    storageBucket: "expensify-1a37c.appspot.com",
    messagingSenderId: "334060550663"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };




// //child removed subscription 
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child changes
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child added

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// firebase.database().ref('expenses').push({
//       description: 'coffee',
//       amount: 150,
//       note: 'cappuccino from coffee island',
//       createdAt: 1130000
// });


//   firebase.database().ref().set({
//       name: 'Csabi',
//       age: 26,
//       isSingle: false,
//       location: {
//           city: 'New York',
//           country: 'US'
//       }
//   }).then(() => {
//       console.log('data saved...');
//   }).catch((e) => {
//       console.log('this is failed', e);
//   });

//   firebase.database().ref('attributes').set({
//       height: 150,
//       weight: 90
//   });

// firebase.database().ref().update({
//     name: 'Toth',
//     age: 30
// });

// firebase.database().ref('location/city').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch(() => {
//     console.log('error fetching data')
// })

// firebase.database().ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     firebase.database().ref('age').set(28);
// }, 3500)

// setTimeout(() => {
//     firebase.database().ref().off();
// }, 7000)

// setTimeout(() => {
//     firebase.database().ref('age').set(30);
// }, 10500)


// firebase.database().ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val.name + ' is living in ' + val.location.city);
// });

// setTimeout(() => {
//     firebase.database().ref('name').set('Csabi');
// }, 3000)
