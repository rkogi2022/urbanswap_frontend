import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA3YvuTqk54KVdh41ymBs4FM0-P7NXOkqE",
  authDomain: "urbanswapke.firebaseapp.com",
  databaseURL: "https://urbanswapke-default-rtdb.firebaseio.com",
  projectId: "urbanswapke",
  storageBucket: "urbanswapke.appspot.com",
  messagingSenderId: "259973875899",
  appId: "1:259973875899:web:d5c8fe9e1cb4705319c19e",
  measurementId: "G-QE92HYW9XG"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}