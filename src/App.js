import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Context from './components/Context'

function App() {

  return (
    <BrowserRouter>
      <Context>
        <Header />
        <Main />
        <Footer />
      </Context>
    </BrowserRouter>
  );
}

export default App;