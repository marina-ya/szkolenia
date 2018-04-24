import React from 'react'
import PropTypes from 'prop-types'

import * as Style from './styles'
import { Section } from './styles'

export default function CoursesList(props) {
  return (
    <Section>
      <h2>Lista szkolen</h2>
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
