import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action";
import "../../../css/nav.css";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () =>{
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() =>{
    window.addEventListener('scroll', updateScroll);
  });


  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler1 = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("로그아웃 실패 했습니다.");
      }
    });
  };

  const onClickHandler2 = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const navHandler1 = () => {
    dispatch(logoutUser());
    navigate("/border");
  };
  const navHandler2 = () => {
    dispatch(logoutUser());
    navigate("/exhibition");
  };

  return (
    <div className="center">
      <div className="navtop">
      {/* <div className={scrollPosition < 10 ? "navtop" : "navtop_change"}> */}
        <div>
          <ul className="li">
          {/* <ul className={scrollPosition < 10 ? "li" : "li_change"}> */}
            <div className="navImg">
              <li>
              <AiOutlineMenu style={{width:"30px", height:"30px"}} />
              </li>
              <li>
                <a href="/"><img
                    style={{
                      width: "90px",
                      height: "30px"
                    }}
                    src="/img/Life_4_Art_cut.png"></img></a>
              </li>
            </div>


            <li id="nav-list"><a onClick={navHandler2}>전시</a></li>
            <li id="nav-list"><a href="/">공연</a></li>
            <li id="nav-list"><a href="/">연극</a></li>
            <li id="nav-list"><a onClick={navHandler1}>게시판</a></li>
            <li id="nav-list"><a href="/">고객센터</a></li>

            <div className="navLog">
            <li id="nav-list"><a onClick={onClickHandler2}>Log In</a></li>
            <li id="nav-list"><a onClick={onClickHandler1}>Log Out</a></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default NavBar;
