import React from 'react'
import styles from "../../../App.css";

function NavBar() {
  return (
    <div className='center'>
      <div className='navtop'
      >

        <div>
          <ul className='li'>
            <li><a href='/'>Nav1</a></li>
            <li><a href='/'>Nav2</a></li>
            <li><a href='/'>Nav3</a></li>
            <li><a href='/'>Nav4</a></li>
            <li><a href='/'>Nav5</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar