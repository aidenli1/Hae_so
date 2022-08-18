import React,{useState,useEffect} from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Header2 from "../../Header/header2";
import Calendar from "../../../views/Items/Calendar/CalendarEx"
import Slider from "../../Items/Slider/Slider";

import '../../../../css/exhibition.css'
import {AiOutlineHeart, AiOutlineStar,AiFillStar} from "react-icons/ai";

function Exhibition() {

  return (
    <div className="center">
      <Header2></Header2>
      <NavBar></NavBar>
    <div className="mainPage3">
      <div className="mainText">
        <h1>#들여보다 : 해소</h1>
        <span>현재 진행중인 전시를 소개해드립니다.</span>
      </div>
    </div>

    <div className="pageMain">
          <div className="pageMain-container">
            <div className="pageMain-container_imgtext">
              <div className="pageMain-container__img">
              <img src='/img/ex/exMain-img__2.jpeg'></img>
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
                  <li style={{marginTop: "50px"}}>작가소개</li>
                  <li style={{marginTop: "50px"}}>소개</li>
                </ul>

                <ul className="pageMain-container__text_ul2">
                  <li>#들여보다 : 해소</li>
                  <li>광주광역시 남구 방림동 172로 20</li>
                  <li>상시</li>
                  <li>
                    <div className="pageMain-container__text_sell">
                      <li>心CHUNG : <span>6400</span>원</li>
                      <li>DROP : <span>5500</span>원</li>
                      <li style={{marginTop: "17px",width:"300px"}}>
                        임규민 <br />
                        대한민국 출생. 2000년생으로 십 도라이련임
                        </li>
                        <li style={{marginTop:"28px",width:"500px",height:"180px",background:"#F3F3F3"}}>
                        <p>
                          {/* 옥승철은 만화, 영화, 게임 등 화면 내부에서 변조, 복제되는 디지털 이미지에 근간을 두고 구현한 그의 캐릭터 이미지를 회화, 영상, 조각 등 여러 매체로 변주하며 그것이 관람객에게 예술적 경험을 제공하는 플랫폼이 될 수 있음을 증명해왔다. */}
                          현재의 커피 문화의 심각성을 직감하고 자신만의 커피를 하겠노라 선언후 정말 그 다짐을 실현시키므로 자신의 능력과 의지를 증명해냄.
                          </p>
                          <p>
                          자기자신과, 사람들에게 각자의 삶을 "해소" 할 공간을 제공한다는 뜻. 단순 카페가 아닌 하나의 커뮤니케이션 으로써의 모습을 만드는게 목표입니다. 찾아오는 한분한분에게 집중하기위해 바(Bar)를 두 파트로 나눴습니다.
                          커피뿐만 아니라 지친 몸과 마음을 위해 위스키도 준비되어 있습니다. 색의 질감과 향, 온전한 시간을 드리겠습니다.
                              -당신만의 해소
                          </p>
                        </li>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pageMain2_text">
          <span>공간 설명</span>
        </div>

        <div className="pageMain2">
          <Slider className="Slider"></Slider>
          {/* <div className="pageMain2-about">
          <ul className="pageMain-container__text_ul1">
                  <li>제목</li>
                  <li>장소</li>
                  <li>일시</li>
                  <li>가격</li>
                  <li style={{marginTop: "50px"}}>작가소개</li>
                  <li style={{marginTop: "50px"}}>소개</li>
                </ul>

                <ul className="pageMain-container__text_ul2">
                  <li>#들여보다 : 해소</li>
                  <li>광주광역시 남구 방림동 172로 20</li>
                  <li>상시</li>
                  <li>
                    <div className="pageMain-container__text_sell">
                      <li>DROP : 5.5</li>
                      <li>心 CHUNG : 6.4 </li>
                      <li style={{marginTop: "17px",width:"300px"}}>
                        임규민 <br />
                        대한민국 출생. 2000년생으로 십 도라이련임
                        </li>
                        
                    </div>
                  </li>
                </ul>
          </div> */}
        </div>

        <div style={{marginLeft:"215px"}}>
          <Calendar></Calendar>
        </div>

      <Footer></Footer>
    </div>
  );
}

export default Exhibition;
