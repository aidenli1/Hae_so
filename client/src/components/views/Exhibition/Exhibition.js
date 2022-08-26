import React from "react";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Header2 from "../Header/header2";
import "../../../css/exhibition.css";
import $ from "jquery";

function Exhibition() {
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".exMain-container_tag");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

  return (
    <div className="center">
      <Header2></Header2>
      <NavBar></NavBar>
      <div className="mainPage3">
        <div className="mainText">
          <h1>전시</h1>
          <span>현재 진행중인 전시를 소개해드립니다.</span>
        </div>
      </div>

      <div className="exMain-container_tag">
        <div className="exhibitionMain">
          <div className="exMain-container">
            <a href="/page1">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__1.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>«#2: 옥승철 – 크리에이트 아웃라인즈»</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>
                      2022. 6. 22. – 2022. 8. 7. • 아트선재센터 1, 2 전시실 및
                      아트홀
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="exMain-container">
            <a href="/page2">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__2.jpeg"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>#들여보다 : 해소</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>상시. • 광주광역시 남구 방림동 172로 20</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="exMain-container">
          <a href="/page3">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__3.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>ctrl+shift+s; 다른 이름으로 저장</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>
                      2022.08.11. - 10.20. • 대전광역시 중구 중앙로112번길 46
                      2층
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* ------------secend------------ */}
      <div className="exMain-container_tag">
        <div className="exhibitionMain2">
          <div className="exMain-container">
            <a href="/page3">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__4.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>《느낌 실험실 Feeling Lab》</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>2022.7.26 - 8.21 • 서울 종로구 경희궁3길 3-5 1층</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="exMain-container">
            <a href="/">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__5.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>시오타 치하루 개인전 《In Memory》</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>2022.7.15 - 8.21 • 서울 종로구 평창30길 28</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="exMain-container">
            <a href="/">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__6.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3> 《장-미셸 오토니엘 : 정원과 정원》</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>2022.6.16 - 8.7 • 서울 중구 덕수궁길 61</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* ------------3nd------------ */}
      <div className="exMain-container_tag">
        <div className="exhibitionMain3">
          <div className="exMain-container">
            <a href="/">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__7.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>《디터람즈 : 바우하우스에서 애플까지》</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>2022.8.11 - 10.22 • 경기도 화성시 동탄대로  160</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="exMain-container">
            <a href="/">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__8.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3>르 자르뎅 판톰 : 꿈의 화원</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>2022.8.1 - 9.27 • 서울 용산구 한남대로 28</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="exMain-container">
            <a href="/">
              <div className="exMain-container__about">
                <div className="exMain-container__img">
                  <img src="/img/ex/exMain-img__9.png"></img>
                </div>
                <div className="exMain-container__textTotal">
                  <div className="exMain-container__title">
                    <h3> 《문법과 마법 Syntax and Sorcery》</h3>
                  </div>
                  <div className="exMain-container__text">
                    <p>2022.08.10 - 09.14 • 서울 종로구 삼청로 14</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Exhibition;
