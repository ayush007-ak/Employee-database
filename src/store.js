import firebase from 'firebase/app'
import 'firebase/auth'
 import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
import { composeWithDevTools } from "redux-devtools-extension";
 import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore
 
const fbConfig = {
    apiKey: "AIzaSyDXb0E_VbrwcXEfIrPFGsHo7Sax_C3Ac1M",
    authDomain: "employbase-a8597.firebaseapp.com",
    databaseURL: "https://employbase-a8597.firebaseio.com",
    projectId: "employbase-a8597",
    storageBucket: "employbase-a8597.appspot.com",
    messagingSenderId: "213500013872",
    appId: "1:213500013872:web:ad9f7f93f7846fd95cecf5",
    measurementId: "G-2W1FQHHM2K"

}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
   firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, composeWithDevTools());
 
 export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
   createFirestoreInstance, // <- needed if using firestore
}
 

export default store