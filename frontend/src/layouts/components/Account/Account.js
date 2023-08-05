import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

const AccountContainer = styled.div`
  flex: 0 0 20%;
  background-color: #ffffff; // 배경색을 하얀색으로 수정
  margin: 5px; /* 외부 여백 */
`

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000; /* 검정색 텍스트 */
`

const SmallText = styled.div`
  font-size: small;
`

// 회원가입 및 로그인 버튼
const AccountButton = styled.button`
  height: 50px;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 5px 0;
  width: 80%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

// 이메일과 패스워드 입력 필드
const InputField = styled.input`
  height: 50px;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 5px 0;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Account = (props) => {
  const { className } = props
  const [order, setOrder] = useState({
    register: 1,
    or: 2,
    email: 3,
    password: 4,
    login: 5,
  })

  const [registerText, setRegisterText] = useState('회원가입 할래요')

  const handleRegister = () => {
    setOrder({
      email: 1,
      password: 2,
      register: 3,
      or: 4,
      login: 5,
    })

    setRegisterText('회원가입')
  }

  return (
    <AccountContainer className={className}>
      <AccountWrapper>
        <AccountButton id="register" style={{ order: order.register }} onClick={handleRegister}>
          {registerText}
        </AccountButton>
        <SmallText style={{ order: order.or }}>또는</SmallText>
        <InputField id="email" type="email" placeholder="Email" style={{ order: order.email }} />
        <InputField id="password" type="password" placeholder="Password" style={{ order: order.password }} />
        <AccountButton id="login" style={{ order: order.login }}>
          로그인
        </AccountButton>
      </AccountWrapper>
    </AccountContainer>
  )
}

Account.propTypes = {
  className: PropTypes.string,
}

export default Account
