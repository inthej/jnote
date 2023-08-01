import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0 0 25%;
  background-color: blueviolet;
`

const User = (props) => {
  const { className } = props
  return <Container className={className}>User</Container>
}

export default User
