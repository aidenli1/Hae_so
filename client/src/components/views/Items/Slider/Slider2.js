import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/img/slide/page2/slide_1.jpeg" },
    { url: "/img/slide/page2/slide_2.jpeg" },
    { url: "/img/slide/page2/slide_3.jpeg" },
    { url: "/img/slide/page2/slide_4.jpeg" },
    { url: "/img/slide/page2/slide_5.jpeg" },
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