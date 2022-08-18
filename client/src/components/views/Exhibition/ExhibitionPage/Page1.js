import React,{useState,useEffect} from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Header2 from "../../Header/header2";
import Calendar from "../../../views/Items/Calendar/CalendarEx"
import '../../../../css/exhibition.css'
import {AiOutlineHeart, AiOutlineStar,AiFillStar} from "react-icons/ai";

function Exhibition() {

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
                  <li>«#2: 옥승철 – 크리에이트 아웃라인즈»</li>
                  <li>아트선재센터 1, 2 전시실 및 아트홀</li>
                  <li>2022. 6. 22. – 2022. 8. 7.</li>
                  <li>
                    <div className="pageMain-container__text_sell">
                      <li>대인 : <span>16000</span>원</li>
                      <li>소인 : <span>9000</span>원</li>
                      <li style={{marginTop: "17px",width:"300px"}}>
                        간단한 설명이 들어갈 자리 앙기모띠한 부분이라 <br />
                        할수있는 부분의 부분이다
                        </li>
                        <li style={{marginTop:"28px",width:"500px",height:"180px",background:"rgb(228, 228, 228"}}>
                        <p>
                          옥승철은 만화, 영화, 게임 등 화면 내부에서 변조, 복제되는 디지털 이미지에 근간을 두고 구현한 그의 캐릭터 이미지를 회화, 영상, 조각 등 여러 매체로 변주하며 그것이 관람객에게 예술적 경험을 제공하는 플랫폼이 될 수 있음을 증명해왔다.
                          </p>
                          <p>
                          이번 전시에서 작가는 어도비 일러스트레이터(Adobe Illustrator)의 명령어인 ‘크리에이트 아웃라인즈(Create Outlines)’를 제목으로 삼고, 그의 장발, 단발 캐릭터의 컬러와 흑백, 직선과 곡선, 평면과 입체 등으로 극단적 전이를 선보인다.
                          </p>
                        </li>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="pageMain-container__text_input">
              <p>
              옥승철은 만화, 영화, 게임 등 화면 내부에서 변조, 복제되는 디지털 이미지에 근간을 두고 구현한 그의 캐릭터 이미지를 회화, 영상, 조각 등 여러 매체로 변주하며 그것이 관람객에게 예술적 경험을 제공하는 플랫폼이 될 수 있음을 증명해왔다.
              </p>
              <p>
              이번 전시에서 작가는 어도비 일러스트레이터(Adobe Illustrator)의 명령어인 ‘크리에이트 아웃라인즈(Create Outlines)’를 제목으로 삼고, 그의 장발, 단발 캐릭터의 컬러와 흑백, 직선과 곡선, 평면과 입체 등으로 극단적 전이를 선보인다.
              </p>
            </div> */}
          </div>
        </div>
        <div className="pageMain">
        <Calendar></Calendar>
          <div className="calender">
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default Exhibition;
