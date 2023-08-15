import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header";

function App() {

  let nombre = "vacio"

  return (
    <>
      <Header nombre={nombre} />
      <Main />
      <Footer />
    </>
  );
}

export default App;