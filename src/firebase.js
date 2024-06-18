import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0weP0xFist3IIbn4Qg4IbvI6NbAEnaKE",
  authDomain: "netflix-clone-b4fde.firebaseapp.com",
  projectId: "netflix-clone-b4fde",
  storageBucket: "netflix-clone-b4fde.appspot.com",
  messagingSenderId: "434153841663",
  appId: "1:434153841663:web:1946f86c1441b70c51bdca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
try{
   const res= await createUserWithEmailAndPassword(auth,email,password);
   const user = res.user;
   await addDoc(collection(db, "user"), {

   })
    
}
}


const login = async()=>{
    try {
        signInWithEmailAndPassword
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}