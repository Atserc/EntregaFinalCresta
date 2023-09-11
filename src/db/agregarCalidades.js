import { db } from "./firebase";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";

// Define la categoría que deseas borrar
const categoriaABorrar = "desgasteViejo";

// Función para eliminar la categoría de todos los documentos en la colección
async function eliminarCategoria() {
  const productosCollection = collection(db, "productos");

  try {
    const consultaProductos = await getDocs(productosCollection);

    consultaProductos.forEach(async (doc) => {
      const datosDocumento = doc.data();

      // Verifica si el documento contiene la categoría a borrar
      if (datosDocumento.hasOwnProperty(categoriaABorrar)) {
        // Crea un nuevo objeto sin la categoría a borrar
        const datosSinCategoria = { ...datosDocumento };
        delete datosSinCategoria[categoriaABorrar];

        // Reemplaza el documento completo sin la categoría
        await setDoc(doc.ref, datosSinCategoria);
      }
    });

    console.log(`Categoría "${categoriaABorrar}" eliminada de toda la colección.`);
  } catch (error) {
    console.error('Error al eliminar la categoría:', error);
  }
}

// Llama a la función para eliminar la categoría
eliminarCategoria();