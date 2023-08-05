import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Side from '../components/Side'
import Content from '../components/Content'
import User from '../components/User'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const MainLayout = (props) => {
  const { children } = props
  return (
    <Container>
      <Side className="side" />
      <Content className="content">{children}</Content>
      <User className="user" />
    </Container>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
