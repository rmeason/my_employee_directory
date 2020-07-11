import React from "react";

import './App.css';

import Header from "./components/Header";

import Container from "./components/Container";

import Body from "./components/Body";

function App() {

    return(
      <div className="App">
        <Container>
          <Header />
          <Body />
        </Container>
      </div>
    );
  }

export default App;


