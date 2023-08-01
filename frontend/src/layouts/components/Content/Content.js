import React from 'react'
import styled from 'styled-components'
import './Content.css'

const Container = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin: 5px; /* 외부 여백 */

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const Content = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      <div className="paper" style={{ minHeight: '438.312px' }}>
        <div className="note" contentEditable={true} spellCheck={false}></div>
      </div>
    </Container>
  )
}

export default Content
