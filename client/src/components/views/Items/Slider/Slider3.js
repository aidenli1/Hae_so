import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/img/slide/page3/slide_1.png" },
    { url: "/img/slide/page3/slide_2.png" },
    { url: "/img/slide/page3/slide_3.png" },
    { url: "/img/slide/page3/slide_4.png" },
    { url: "/img/slide/page3/slide_5.png" },
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