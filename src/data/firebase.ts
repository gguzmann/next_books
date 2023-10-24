// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5DuvX2pMaJ4bi9D318qUrD8DuSFEunTc',
  authDomain: 'libros-b3b65.firebaseapp.com',
  projectId: 'libros-b3b65',
  storageBucket: 'libros-b3b65.appspot.com',
  messagingSenderId: '913779127290',
  appId: '1:913779127290:web:79aff6c45ce3834c9b2a43'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const registerNewUsers = async (email: string, password: string) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password)
  console.log(newUser)
  return newUser
}

export const singIn = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
  return user
}

export const singInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const user = await signInWithPopup(auth, provider)
  return user
}

export const singOut = async () => {
  signOut(auth)
}
