import React from "react";
import ReactDOM from "react-dom";
//React Carousel
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

import {breakPoints} from './Exports/breakPoints';

import {images} from './Exports/images';

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {images.map(imagem => (
            <Item><img src={imagem} /></Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
