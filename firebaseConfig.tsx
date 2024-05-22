import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




export const firebaseConfig = {
  apiKey: "AIzaSyAcNudYg5YVc3mITZhDn0gJJRkdwMShk2M",
  authDomain: "urban-swap-f3ad0.firebaseapp.com",
  projectId: "urban-swap-f3ad0",
  storageBucket: "urban-swap-f3ad0.appspot.com",
  messagingSenderId: "148676236160",
  appId: "1:148676236160:web:463a6253d38ccc690da765",
  measurementId: "G-91H6L9XV6F"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
