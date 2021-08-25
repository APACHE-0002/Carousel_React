import React from "react";
import ReactDOM from "react-dom";
//React Carousel
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";




//breakpoints do styled-components
//ao bater a largura predefinida, ira diminuir a quantidade de items
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 2000, itemsToShow: 5 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
          <Item>Nine</Item>
          <Item>Ten</Item>
          <Item>Eleven</Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
