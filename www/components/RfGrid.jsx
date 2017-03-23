import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { Grid, Row, Col } from 'react-bootstrap';

function RfCell (props) {
  return (
    <Col sm={6} md={3}>
      <Card style={{width: '250px'}}>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title={ props.title }
          subtitle={ props.subtitle }
        />
        <CardMedia
          aspectRatio="wide"
          image="https://placeimg.com/800/450/nature"
        />
        <CardTitle
          title={ props.title }
          subtitle={ props.subtitle }
        />
        <CardText>{ props.text }</CardText>
        <CardActions>
          <Button label="Action 1" />
          <Button label="Action 2" />
        </CardActions>
      </Card>
    </Col>
  )
}

function RfGrid (props) {
  return (
    <Grid>
      <Row className="show-grid">
        { props.cells.map(c => RfCell(c)) }
      </Row>
    </Grid>
  )
}
export default RfGrid

// <RfCell title="THIS IS TITLE" subtitle="sub sub sub sub" text="foobarfoobarfoobarfoobarfoobar" />
