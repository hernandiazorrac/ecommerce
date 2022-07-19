// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGlxVjGptiqj0W-9OFwYF_g5BMsFJBvhY",
  authDomain: "skateshopreactjs.firebaseapp.com",
  projectId: "skateshopreactjs",
  storageBucket: "skateshopreactjs.appspot.com",
  messagingSenderId: "779561849355",
  appId: "1:779561849355:web:23bdb58ff1325d2ccdad0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function GetAllItems(){
  //trae la colección desde firebase
  const itemsRef = collection (db, "items");

  //lee los documentos de la colección con getDocs
  const docsSnapshot = await getDocs(itemsRef)

  //recibe un array "docs" en snapshot
  const dataItems = docsSnapshot.docs.map(i => {
    const item = {
      ...i.data(),
      id: i.id
    }
    return item;
  })

  return(dataItems);
}

export async function GetItemFiltered(id){
    const itemsRef = collection (db, "items");

    const docRef = doc(itemsRef, id);

    const docsSnapshot = await getDoc(docRef);

    return docsSnapshot.data();
}

// export async function GetItemsByCategory(catId){

//   const itemsRef = collection (db, "items");

//   const q = query(itemsRef, where("categoria", "==", "Armados"))
  
//   const querySnap = await getDocs(q);
  
//   querySnap.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data())
//   })
// }

export const getData = () => getFirestore(app)