import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import CoursesList from '../components/CoursesList'
import CalendarList from '../components/Calendar'
import TrainersList from '../components/TrainersList'

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
    <CalendarList />
    <CoursesList />
    <TrainersList />
  </div>
)

export default IndexPage
