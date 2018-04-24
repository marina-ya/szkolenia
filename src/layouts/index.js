import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import './index.css'

const ChildrenWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <ChildrenWrapper>{children()}</ChildrenWrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
