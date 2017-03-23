import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { Grid, Row, Col } from 'react-bootstrap';
import SortFilter from './SortFilter.jsx'
import RfCard from './RfCard.jsx'

function RfGrid (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Row>
        <Col sm={12} md={3}>
          <div>
            <SortFilter select_values={props.select_values}/>
          </div>
        </Col>
        <Col sm={12} md={9}>
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={3}>
                <RfCard
                  title={props.cards[0].title}
                  subtitle={props.cards[0].subtitle}
                  link={props.cards[0].link}
                />
              </Col>
              <Col sm={6} md={3}>
                <RfCard
                  title={props.cards[1].title}
                  subtitle={props.cards[1].subtitle}
                  link={props.cards[1].link}
                />
              </Col>
              <Col sm={6} md={3}>
                <RfCard
                  title={props.cards[2].title}
                  subtitle={props.cards[2].subtitle}
                  link={props.cards[2].link}
                />
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </div>
  )
}
export default RfGrid

// <RfCell title="THIS IS TITLE" subtitle="sub sub sub sub" text="foobarfoobarfoobarfoobarfoobar" />
