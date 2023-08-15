import React from "react";
import Container from "./Container";
import ItemListContainer from "./ItemListContainer";

function Main(){

    //vista
    return (
        <main id="main" className="main grow px-2 py-2">
            <ItemListContainer />
            <Container />
        </main>
    );
  }
  
export default Main;