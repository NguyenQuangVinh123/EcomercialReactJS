import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAseIgz2_Mfpe7NGhe_YP-rWtf00ex0gPA",
    authDomain: "colthshopping.firebaseapp.com",
    databaseURL: "https://colthshopping.firebaseio.com",
    projectId: "colthshopping",
    storageBucket: "colthshopping.appspot.com",
    messagingSenderId: "1004369793243",
    appId: "1:1004369793243:web:ed47d8cf965827066a3cfe",
    measurementId: "G-7ZLFJ221WT"
  };

  export const createUserProfileDocument = async(userAuth, additionData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionData
        })
      } catch (error) {
          console.log('error creating user',error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});


  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;