import { db } from "./firebase";
import { getDocs , collection, doc, updateDoc } from "firebase/firestore";

async function traerProductos() {
  const coleccionProd = collection(db, "productos");
  try {
    const consultaProductos = await getDocs(coleccionProd);
    const productos = consultaProductos.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productos;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function actualizarStock() {
  const data = await traerProductos();
  data.forEach(async (item) => {
    const prodRef = doc(db, 'productos', item.id);
    const nuevoStock = {
      stock: 20
    };
    try {
      await updateDoc(prodRef, nuevoStock);
      console.log(`ID ${item.id}. Stock: 20`);
    } catch (error) {
      console.error(`Error actualizando ${item.id}:`, error);
    }
  });
}

export default actualizarStock();
