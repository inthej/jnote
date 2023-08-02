import React, { useState } from 'react'
import styled from 'styled-components'
import './User.css'

const Container = styled.div`
  flex: 0 0 20%;
  background-color: #ffffff; // 배경색을 하얀색으로 수정
  margin: 5px; /* 외부 여백 */
`

const User = (props) => {
  const [order, setOrder] = useState({
    email: 3,
    password: 4,
    register: 1,
    or: 2,
    login: 5,
  })

  const [registerText, setRegisterText] = useState('I am a new user')

  const handleRegister = () => {
    setOrder({
      email: 1,
      password: 2,
      register: 3,
      or: 4,
      login: 5,
    })

    setRegisterText('Register')
  }

  return (
    <Container>
      <div className="account">
        <button id="register" style={{ order: order.register }} onClick={handleRegister}>
          {registerText}
        </button>
        <div id="or" style={{ order: order.or }}>
          or
        </div>
        <input id="email" type="email" placeholder="Email" style={{ order: order.email }} />
        <input
          id="password"
          type="password"
          placeholder="Password"
          style={{ order: order.password }}
        />
        <button id="login" style={{ order: order.login }}>
          Login
        </button>
      </div>
    </Container>
  )
}

export default User
