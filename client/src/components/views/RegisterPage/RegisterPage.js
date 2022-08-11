import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/header'
import '../../../css/login.css';

function RegisterPage() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPassword = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();


    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야합니다.")
    }

    let body = {
      email: Email,
      password: Password,
      name: Name
    }

    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate('/login');
        } else {
          alert('Failed to sign up')
        }
      })
  }

  return (
    <>
    <Header></Header>
    <NavBar></NavBar>
    <h1>
          <p>Join</p>
        </h1>
    <div className='center1' style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
  }}>

      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPassword} />

        <br />
        <button type='submit'>
          Join
        </button>
      </form>

      
    </div>
    <Footer></Footer>
    </>
  )
}

export default RegisterPage