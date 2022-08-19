import React from 'react'
import "../../../css/header.css";
import Slider_Main from '../Items/Slider/Slider_Main';
function header() {
  return (

    <div className='center'style={{height: "300px"}}>
      <div className='headerImg'>
        <Slider_Main></Slider_Main>
      </div>
      {/* <video className='headerVideo'
        autoPlay='autoPlay'
        muted='muted'
        loop='loop'
      >
        <source src={'/video/dark-waves.mp4'} type="video/mp4" />
      </video> */}
    </div>
  )
}

export default header