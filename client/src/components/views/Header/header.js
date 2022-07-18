import React from 'react'

function header() {
  return (

    <div className='center'style={{height: "300px"}}>

      <video className='headerVideo'
        autoPlay='autoPlay'
        muted='muted'
        loop='loop'
      >
        <source src={'/video/dark-waves.mp4'} type="video/mp4" />
      </video>
    </div>
  )
}

export default header