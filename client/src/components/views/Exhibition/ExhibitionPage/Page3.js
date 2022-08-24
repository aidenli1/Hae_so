import React,{useState,useEffect} from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Header2 from "../../Header/header2";
import Calendar from "../../../views/Items/Calendar/CalendarEx"
import Slider3 from "../../Items/Slider/Slider3";

import '../../../../css/exhibition.css'
import {AiOutlineHeart, AiOutlineStar,AiFillStar} from "react-icons/ai";

function Exhibition() {

  return (
    <div className="center">
      <Header2></Header2>
      <NavBar></NavBar>
    <div className="mainPage3">
      <div className="mainText">
        <h1>ctrl+shift+s; 다른 이름으로 저장</h1>
        <span>현재 진행중인 전시를 소개해드립니다.</span>
      </div>
    </div>

    <div className="pageMain">
          <div className="pageMain-container">
            <div className="pageMain-container_imgtext">
              <div className="pageMain-container__img">
              <img src='/img/ex/exMain-img__3.png'></img>
              <div className="pageMain-container__img__star">
              <AiOutlineHeart style={{width:"30px",height:"30px",color: "#fd3967"}}></AiOutlineHeart>
                <p>29</p><span>Likes</span>
                <div style={{margin:"5px 0 0 70px",display:"flex"}}>
                <AiFillStar style={{width:"20px",height:"20px",color:"orange"}}></AiFillStar>
                <AiFillStar style={{width:"20px",height:"20px",color:"orange"}}></AiFillStar>
                <AiFillStar style={{width:"20px",height:"20px",color:"orange"}}></AiFillStar>
                <AiFillStar style={{width:"20px",height:"20px",color:"orange"}}></AiFillStar>
                <AiOutlineStar style={{width:"20px",height:"20px",color:"orange"}}></AiOutlineStar>
                <div style={{margin:"-1px 10px"}}>4.3(72명)</div>
                </div>
                </div>
              </div>

              
              <div className="pageMain-container__text">
                <ul className="pageMain-container__text_ul1">
                  <li>제목</li>
                  <li>장소</li>
                  <li>일시</li>
                  <li>가격</li>
                  <li style={{marginTop: "82px"}}>작가소개</li>
                  <li style={{marginTop: "50px"}}>소개</li>
                </ul>

                <ul className="pageMain-container__text_ul2">
                  <li>ctrl+shift+s; 다른 이름으로 저장</li>
                  <li>대전광역시 중구 중앙로112번길 46 2층</li>
                  <li> 2022.08.11. - 10.20</li>
                  <li>
                    <div className="pageMain-container__text_sell">
                      <li>대인 : <span>11000</span>원</li>
                      <li>소인 : <span>6000</span>원</li>
                      <li style={{marginTop: "47px",width:"800px"}}>
                        백색 공간 편집 디자인, 브랜딩, 패키지디자인등 다양한 그래픽 문야의 작업들을 하고있다.
                        </li>
                        <li style={{marginTop:"48px",width:"500px",height:"180px",background:"#F3F3F3"}}>
                        <p>
                          전시 제목인 "다른 이름으로 저장" 은 백색공간이 6년이라는 시간동안 디자인을 수행하며 수없이, 무의식적으로 반복한 ctrl+s에서 따온 제목이다.
                          이전 과정의 작업을 남겨두기 위한 용어로도 사용된다.
                          </p>
                          {/* <p>
                          자기자신과, 사람들에게 각자의 삶을 "해소" 할 공간을 제공한다는 뜻. 단순 카페가 아닌 하나의 커뮤니케이션 으로써의 모습을 만드는게 목표입니다. 찾아오는 한분한분에게 집중하기위해 바(Bar)를 두 파트로 나눴습니다.
                          커피뿐만 아니라 지친 몸과 마음을 위해 위스키도 준비되어 있습니다. 색의 질감과 향, 온전한 시간을 드리겠습니다.
                              -당신만의 해소
                          </p> */}
                        </li>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pageMain2_text">
          <span>공간 사진</span>
        </div>

        <div className="pageMain2">
          <Slider3></Slider3>
          <div className="pageMain2_Slider_text">
          <p>sdkjnflsknflksdnflksdnflskfnskldfnslkdfsdafsafsfsn</p>
          <p>sdkjnflsknflksdnflksdnflskfnskldfnslkdfn</p>
          <p>sdkjnflsknflksdnflksdnflskfnskldfnslkdfn</p>
          <p>sdkjnflsknflksdnflksdnflskfnskldfnslkdfn</p>
          <p>sdkjnflsknflksdnflksdnflskfnskldfnslkdfn</p>
          <p>sdkjnflsknflksdnflksdnflskfnskldfnslkdfn</p>
          </div>
        </div>

        {/* <div className="calendar_container">
          <Calendar style={{width:"1000px",
        height:"700px"}}></Calendar>
        </div> */}

      <Footer></Footer>
    </div>
  );
}

export default Exhibition;
