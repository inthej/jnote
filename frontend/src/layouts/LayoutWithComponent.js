import PropTypes from 'prop-types'
import React from 'react'

const LayoutWithComponent = (props) => {
  const { layout: Layout, component: Component, ...rest } = props
  return (
    <Layout {...rest}>
      <Component />
    </Layout>
  )
}

React.propTypes = {
  layout: PropTypes.elementType.isRequired,
  component: PropTypes.elementType.isRequired,
}

export default LayoutWithComponent
