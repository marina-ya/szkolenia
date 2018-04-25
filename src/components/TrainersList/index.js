import React from 'react'
import PropTypes from 'prop-types'

import { Block } from './styles'
import { Section, Holder, Button, Title } from '../common/styles'
export default function TrainersList(props) {
  return (
    <Section>
      <Title>Lista trenerów</Title>
      <Holder>
        {props.trainers.map(trainer => (
          <Block key={trainer.name}>
            <h3>{trainer.name}</h3>
            <p>{trainer.status}</p>
          </Block>
        ))}
      </Holder>
    </Section>
  )
}

TrainersList.defaultProps = {
  trainers: [
    {
      name: 'RAFAŁ ',
      status: 'HTTP, REST API',
    },
    {
      name: 'KRZYSZTOF',
      status: 'HTML, CSS',
    },
  ],
}
