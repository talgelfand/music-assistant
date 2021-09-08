import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZ4KoUExdtZMmTftl7R0NjyUXoDjobd7o",
  authDomain: "music-assistant-ae8fa.firebaseapp.com",
  projectId: "music-assistant-ae8fa",
  storageBucket: "music-assistant-ae8fa.appspot.com",
  messagingSenderId: "672879146199",
  appId: "1:672879146199:web:85556146dcf45df9a16c92",
  measurementId: "G-6FD9K04E38",
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.firestore()
