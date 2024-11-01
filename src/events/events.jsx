import "./styles.css";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import Card from "./Card";
import Card from "./CardNews";
import { config } from "react-spring";
import Carroussel from "./Carroussel";

export default function App() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card src="./events/4.png" heading="Event 1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/2.png" heading="Event 2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/3.jpg" heading="Event 3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/1.png" heading="Event 4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/5.png" heading="Event 5" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/6.jpg" heading="Event 6" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/7.jpg" heading="Event 7" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/8.png" heading="Event 8" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    }
  ]; /*.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });*/

  return (
    <div className="App">
      {/*<div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
  </div>*/}
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
