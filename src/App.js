import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;