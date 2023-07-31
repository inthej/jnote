import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0 0 20%;
  background-color: aqua;
`

const Side = (props) => {
  const { className } = props
  return <Container className={className}>Side</Container>
}

export default Side
