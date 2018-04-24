import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import CoursesBlocks from '../components/CoursesBlocks'
import styled, { injectGlobal } from 'styled-components'
injectGlobal`
  html,body {
    font-family:  NeuzeitGro-Lig, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
`
const IndexPage = () => (
  <div>
    <Header />
    <CoursesBlocks />
  </div>
)

export default IndexPage
