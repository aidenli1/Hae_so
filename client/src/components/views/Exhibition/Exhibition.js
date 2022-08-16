import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Header2 from "../Header/header2";
import '../../../css/exhibition.css'

function Exhibition() {
  return (
    <div className="center">
      <Header2></Header2>
      <NavBar></NavBar>
      <div className="mainPage">
        <h1>
          <p>Life For Art</p>
        </h1>
      </div>
    <div className="mainPage3">
      

      <div className="mainText">
      <h2>전시</h2>
      </div>
      
    </div>
    <div className="exhibitionMain">
        현재 진행중인 전시
      </div>





      <Footer></Footer>
    </div>
  );
}

export default Exhibition;
