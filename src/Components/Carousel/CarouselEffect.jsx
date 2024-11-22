// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { img } from "../images/data"

// function CarouselEffect() {
//   return (
//     <div>
//       <Carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={false}
//         showThumbs={true}
//       >
//         {img.map((imageItemLink) => {
//           return <img src={imageItemLink} />;
//         })}
//       </Carousel>
//     </div>
//   );
// }
// export default CarouselEffect;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import {img} from "../images/data"


function CarouselEffect() {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={true}>
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Carousel item ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
