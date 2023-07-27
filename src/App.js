import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  let nombre = "vacio"

  return (
    <>
      <Header nombre={nombre} />
      <ItemListContainer nombre={nombre} />
      <Main />
      <Footer />
    </>
  );
}

export default App;