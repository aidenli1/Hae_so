import React,{useState} from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Header2 from "../../Header/header2";
import '../../../../css/exhibition.css'
import {AiOutlineHeart} from "react-icons/ai";
function Exhibition() {
  const [insertToggle, setInsertToggle] = useState(false);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  return (
    <div className="center">
      <Header2></Header2>
      <NavBar></NavBar>
    <div className="mainPage3">
      <div className="mainText">
        <h1>«#2: 옥승철 – 크리에이트 아웃라인즈»</h1>
        <span>현재 진행중인 전시를 소개해드립니다.</span>
      </div>
    </div>

    <div className="pageMain">
          <div className="pageMain-container">
            <div className="pageMain-container_imgtext">
              <div className="pageMain-container__img">
              <img src='/img/ex/exMain-img__1.png'></img>
              <div className="pageMain-container__img__star">
              <AiOutlineHeart style={{width:"30px",height:"30px"}}></AiOutlineHeart>
                <p>17 <span>Likes</span></p>
                
                </div>
              </div>
              <div className="pageMain-container__text">
                <ul className="pageMain-container__text_ul1">
                  <li>제목</li>
                  <li>장소</li>
                  <li>일시</li>
                  <li>가격</li>
                  <li style={{marginTop: "50px"}}>소개</li>
                </ul>

                <ul className="pageMain-container__text_ul2">
                  <li>«#2: 옥승철 – 크리에이트 아웃라인즈»</li>
                  <li>아트선재센터 1, 2 전시실 및 아트홀</li>
                  <li>2022. 6. 22. – 2022. 8. 7.</li>
                  <li>
                    <div className="teeeel">
                      <li>대인 : 16000원</li>
                      <li>소인 : 9000원</li>
                      <li style={{marginTop: "17px",width:"300px"}}>
                        간단한 설명이 들어갈 자리 앙기모띠한 부분이라 <br />
                        할수있는 부분의 부분이다
                        </li>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    
      <Footer></Footer>
    </div>
  );
}

export default Exhibition;
