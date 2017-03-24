import React from 'react' //eslint-disable-line
import { Grid, Row, Col } from 'react-bootstrap'
import SortFilter from './SortFilter.jsx'
import RfCard from './RfCard.jsx'

function RfGrid (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Row>
        <Col sm={12} md={3}>
          <div>
            <SortFilter select_values={props.select_values} />
          </div>
        </Col>
        <Col sm={12} md={9}>
          <Grid>
            <Row className='show-grid'>
              {props.cards.map(c => (
                <Col sm={6} md={3} key={Math.random().toString(16).substr(2)}>
                  <RfCard
                    title={c.title}
                    subtitle={c.subtitle}
                    link={c.link}
                  />
                </Col>
              ))}
            </Row>
          </Grid>
        </Col>
      </Row>
    </div>
  )
}
export default RfGrid

// <RfCell title="THIS IS TITLE" subtitle="sub sub sub sub" text="foobarfoobarfoobarfoobarfoobar" />
