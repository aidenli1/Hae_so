import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/header";
import styles from "../../../css/landing.css";
function LandingPage() {
  return (
    <div className="center">
      <NavBar></NavBar>
      <Header></Header>
      <div className="mainPage">
        <h1>
          <p style={{color:"#fff",background:"#000"}}>Life For Art</p>
        </h1>
      </div>

      <div className="maingPage2">
            <div className="main2Content">
                test test
            </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
