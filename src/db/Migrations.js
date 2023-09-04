import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"
import data from "./products.json"

const productosCollection = collection(db,"productos")

data.forEach((producto)=>{
    
    addDoc(productosCollection,producto)
    .then((resultado)=>{
        console.log(".then/resultado: ", resultado);
        console.log("producto agregado");
    })
    .catch((error)=>{
        console.log("data.forEach/error: ", error);
        console.log("fallo");
    })
})