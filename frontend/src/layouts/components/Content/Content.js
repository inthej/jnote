import React from 'react'
import styled from 'styled-components'
import './Content.css'

const Container = styled.div`
  flex: 0 0 50%;
`

const Content = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      <div className="paper" style={{ minHeight: '438.312px' }}>
        <div className="note" contentEditable={true}>
          text
          <br />
          text
          <br />
          <br />
        </div>
      </div>
    </Container>
  )
}

export default Content
