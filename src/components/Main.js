import React from "react";
import Form from "./Form";
import Container from "./Container";

function Main(){

    //vista
    return (
        <main id="main" className="main grow px-2 py-2">
            <br />
            <Form />
            <br />
            <Container />
        </main>
    );
  }
  
export default Main;