// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';

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
export const db = getFirestore(app)

export async function GetAllItems(){

  //trae la colección desde firebase
  const itemsRef = collection(db, "items");

  const q = query(itemsRef, orderBy("id", "asc")) //trae todos los items en orden de ID

  //lee los documentos de la colección con getDocs
  const docsSnapshot = await getDocs(q)

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

export async function GetItemFiltered(id){ //filtrado por ID para itemdetail
    const itemsRef = collection (db, "items");

    const docRef = doc(itemsRef, id);

    const docsSnapshot = await getDoc(docRef);

    return docsSnapshot.data();
}

export async function GetItemsByCategory(catId){ //filtrado por categoría desde firebase para secciones de navbar

  const itemsRef = collection (db, "items");

  const q = query(itemsRef, orderBy("id", "asc"), where("categoria", "==", catId))
  
  const docsSnapshot = await getDocs(q);
  
  const dataItems = docsSnapshot.docs.map(i => {
    const item = {
      ...i.data(),
      id: i.id
    }
    return item;
  })
  return(dataItems)
}

export const getData = () => getFirestore(app)