import React from 'react'
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/header";
import styles from "../../../css/landing.css";

function Border() {
  return (
    <div className="center">
      <NavBar></NavBar>
      <Header></Header>

      <div className="mainPage">
        <h1>
          <p>border page</p>
        </h1>
      </div>

      <div className="maingPage2">
            <div className="main2Content">
                test test
            </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Border