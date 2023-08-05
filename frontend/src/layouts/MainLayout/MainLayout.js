import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Account from '../components/Account'

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
      <Sidebar className="side" />
      <Content className="content">{children}</Content>
      <Account className="user" />
    </Container>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
