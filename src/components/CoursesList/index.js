import React from 'react'
import PropTypes from 'prop-types'

import { Section, Title } from '../common/styles'
export default function CoursesList(props) {
  return (
    <Section>
      <Title>Lista szkolen</Title>
      <ul>
        <li>Blockchain</li>
        <li>AWS</li>
        <li>Analizacja testow</li>
        <li>TDD</li>
        <li>DDD</li>
      </ul>
    </Section>
  )
}
