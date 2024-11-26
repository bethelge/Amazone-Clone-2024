import React from "react";
import Header from "./Components/Header/Header";

import CarouselBanner from "./Components/Carousel/Carousel";
import Category from "./Components/Catagory/Category";



function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBanner />
      <Category/>
    </div>
  );
}

export default App;
