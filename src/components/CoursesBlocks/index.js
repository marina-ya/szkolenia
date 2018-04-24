import React from 'react'
import PropTypes from 'prop-types'

import * as Style from './styles'

export default function CoursesBlocks(props) {
  return (
    <Style.CoursesBlocks>
      {props.events.map(event => (
        <Style.Block key={event.title}>
          <h3>{event.title}</h3>
          <p>Sta drt: {event.date}</p>
          <p>{event.free} wolnych miejsc</p>
          <Style.Button href={event.link}>szczegóły</Style.Button>{' '}
        </Style.Block>
      ))}
    </Style.CoursesBlocks>
  )
}

CoursesBlocks.defaultProps = {
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
