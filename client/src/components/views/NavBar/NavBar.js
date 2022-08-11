import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action";
import styles from "../../../css/nav.css";

function NavBar() {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler1 = () => {
    dispatch(logoutUser())
      // axios.get(`/api/users/logout`)
      .then((response) => {
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

  return (
    <div className='center'>
      <div className='navtop'
      >

        <div>
          <ul className='li'>
            <li><a href='/'>Home</a></li>
            <li><a onClick={navHandler1}>Border</a></li>
            <li><a href='/'>Nav3</a></li>
            <li><a href='/'>Nav4</a></li>
            <li><a href='/'>Nav5</a></li>
            <li><a onClick={onClickHandler2}>로그인</a></li>
            <li><a onClick={onClickHandler1}>로그아웃</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar