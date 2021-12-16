import firebase from 'firebase';

const appconfiguration ={
    apiKey: "AIzaSyD9xz6K5YErt-9RiH0sRjeYxcH29tSQeos",
    authDomain: "fir-2cff2.firebaseapp.com",
    projectId: "fir-2cff2",
    storageBucket: "fir-2cff2.appspot.com",
    messagingSenderId: "676584641981",
    appId: "1:676584641981:web:6ed314e75cadffd8d8aed4",
    measurementId: "${config.measurementId}"
}

const firebaseapp = firebase.initialiseApp(appconfiguration);//putting database keys
const db = firebaseapp.firestore();//linking our database
const auth = firebase.auth(); //providing aunthetication to the database
const provider = new firebase.auth.GoogleAuthProvider();//assigning google to be your aunthetication provider.
const storage = firebase.storage(); //using firebase to store your files.

export  default {provider, storage, auth};
export default db;

//managing the communication between my files and the database cloud. 