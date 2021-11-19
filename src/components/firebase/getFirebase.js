import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBGTRXDdqvgTHbpx6shEVjDHeOmuvoKUVA",
    authDomain: "banapple-7665d.firebaseapp.com",
    projectId: "banapple-7665d",
    storageBucket: "banapple-7665d.appspot.com",
    messagingSenderId: "383954937603",
    appId: "1:383954937603:web:265da599f934fa7a5a2b36"
};


//inicializamos nuestra apliacion
const app = firebase.initializeApp(firebaseConfig);



//conecta nuestra aplicacion con la base de datos
export function getFirebase() {
    return firebase.firestore(app)
}