import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Header2 from "../Header/header2";
import "../../../css/login.css";

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const clickMe = () => {
    console.log("lslslksn");
    navigate("/register");
  };

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        alert("로그인 성공!");
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <>
      <Header2></Header2>
      <NavBar></NavBar>

      <div className="center1">
        <h1>
          <p style={{ borderBottom: "1px solid #000",
        justifyContent:"center",
        alignItems:"center" }}>Log in</p>
        </h1>
        <div className="loginContainer">
          <form className="loginForm" onSubmit={onSubmitHandler}>
            <label>Email</label>
            <input
              className="logInput"
              type="email"
              value={Email}
              placeholder="Input Email"
              onChange={onEmailHandler}
            />
            <label>Password</label>
            <input
              className="logInput"
              type="password"
              value={Password}
              placeholder="Input PW"
              onChange={onPasswordHandler}
            />

            <br />
            <button type="submit" className="Log-btn">
              Log in
            </button>
          </form>
          <br />

          <button
            onClick={clickMe} className="Join-btn">
            Join
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default LoginPage;
