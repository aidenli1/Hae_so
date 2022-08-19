import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/header";
import "../../../css/landing.css";

function LandingPage() {
  return (
    <div className="center">
      <Header></Header>
      <NavBar></NavBar>
      <div className="mainPage3">
        <h1>
          <p style={{ color: "#fff", background: "#000" }}>Hae' so</p>
        </h1>
      </div>
      <div className="maingPage2">
        <div className="main2Content1">
          <h1>WHAT'S HOT</h1>
        </div>
        <div className="main2Content2">
          <div className="main2Content2-imgBox1">
            <div className="main2Content2-imgBox__1st">
              <div className="main2Content2-imgBox__1st__img">
                <a href="/">
                  <img src="/img/ex/exMain-img__1.png"></img>
                </a>
              </div>

              <div className="main2Content2-imgBox__1st__text">
                <p>«#2: 옥승철 – 크리에이트 아웃라인즈»</p>
                <span>
                  2022. 6. 22. – 2022. 8. 7. • 아트선재센터 1, 2 전시실 및
                  아트홀
                </span>
              </div>
            </div>
            <div className="main2Content2-imgBox2">
              <div className="main2Content2-imgBox__6cut__top">
                <a href="/"><img src="/img/ex/exMain-img__2.jpeg"></img></a>
                <img src="/img/ex/exMain-img__3.png"></img>
                <img src="/img/ex/exMain-img__4.png"></img>
              </div>

              <div className="main2Content2-imgBox__6cut__bottom">
                <img src="/img/ex/exMain-img__5.png"></img>
                <img src="/img/ex/exMain-img__6.png"></img>
                <img src="/img/ex/exMain-img__3.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="main2Content3"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
