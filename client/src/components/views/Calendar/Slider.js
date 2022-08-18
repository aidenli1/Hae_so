import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/img/slide/slide_1.jpeg" },
    { url: "/img/slide/slide_2.jpeg" },
    { url: "/img/slide/slide_3.jpeg" },
    { url: "/img/slide/slide_4.jpeg" },
  ];

function Slider() {
  return (
     <div>
      <SimpleImageSlider
        width={500}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Slider