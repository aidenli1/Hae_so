import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import '../../../../css/calendar.css';
const images = [
    { url: "/img/main__img.jpeg" },
    { url: "/img/main__img2.jpeg" },
    { url: "/img/main__img3.jpeg" },
    { url: "/img/main__img4.jpeg" },
    { url: "/img/main__img5.png" },
  ];

function Slider_Main() {
  return (
    <div>
    <SimpleImageSlider
      width={'100%'}
      height={600}
      images={images}
      showBullets={false}
      showNavs={false}
      autoPlay={true}
      autoPlayDelay={1.5}
    />
  </div>
  )
}

export default Slider_Main