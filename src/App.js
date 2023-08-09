import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header";
import ItemListContainer from "./components/layout/ItemListContainer";

function App() {

  let nombre = "vacio"

  return (
    <>
      <Header />
      <ItemListContainer nombre={nombre} />
      <Main />
      <Footer />
    </>
  );
}

export default App;