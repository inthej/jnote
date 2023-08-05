import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  flex: 0 0 55%;
  max-width: 50%;
  margin: 5px; /* 외부 여백 */

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const Content = (props) => {
  const { className, children } = props
  return <ContentContainer className={className}>{children}</ContentContainer>
}

Content.propTypes = {
  className: PropTypes.string,
}

export default Content
