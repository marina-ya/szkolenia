import React from 'react'
import PropTypes from 'prop-types'

import * as Style from './styles'
import { Section, Holder, Block, Button } from './styles'

export default function CalendarList(props) {
  return (
    <Section>
      <h2>Kalendarz najbliższych szkoleń</h2>
      <Holder>
        {props.events.map(event => (
          <Block key={event.title}>
            <h3>{event.title}</h3>
            <p>Start: {event.date}</p>
            <p>{event.free} wolnych miejsc</p>
            <Button href={event.link}>szczegóły</Button>{' '}
          </Block>
        ))}
      </Holder>
    </Section>
  )
}

CalendarList.defaultProps = {
  events: [
    {
      title: 'Szkolenie 1',
      link: 'url',
      date: '21.03.2018',
      free: '1',
    },
    {
      title: 'Szkolenie 2',
      link: 'url',
      date: '8.01.2018',
      free: '5',
    },
    {
      title: 'Szkolenie 3',
      link: 'url',
      date: '5.11.2018',
      free: '10',
    },
  ],
}
