import React from "react";
import ReactDOM from "react-dom";
//React Carousel
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

import billy from './assets/billy.jfif';
import bob from './assets/bob.jpg';
import coragem from './assets/coragem.jpg';
import corridamaluca from './assets/corridamaluca.jpg';
import flinston from './assets/flinston.jpg';
import teste from './assets/teste.jpg';
import knd from './assets/knd.jpg';
import pink from './assets/pink.jpg';
import superpoderosas from './assets/superpoderosas.jpg';
import vaca from './assets/vaca.jpg';

const images = [billy, bob, coragem, corridamaluca, flinston, teste, knd, pink, superpoderosas, vaca]



//breakpoints do styled-components
//ao bater a largura predefinida, ira diminuir a quantidade de items
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1700, itemsToShow: 5 },
];

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
