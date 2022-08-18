import React from 'react'
import "../../../css/header.css";
function header() {
  return (

    <div className='center'style={{height: "300px"}}>
      <div className='headerImg'>
        <img src='/img/main__img.jpeg' style={{width:"100%",height:"500px"}}></img>
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