import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0 0 50%;
  background-color: blue;
`

const Content = (props) => {
  const { className } = props
  return <Container className={className}>Content</Container>
}

export default Content
