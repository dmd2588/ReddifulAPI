import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { Grid, Row, Col } from 'react-bootstrap';

export default function Comments () {
  return (
    <div>
      <h2>Comments</h2>
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <Card style={{width: '250px'}}>
              <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title="Bob the Dwarf Warrior"
                subtitle="Mon Jan 1, 1968"
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
              />
              <CardText>Elves are an abomination to dwarf society</CardText>
              <CardActions>
                <Button label="Details" />
              </CardActions>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card style={{width: '250px'}}>
              <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title="1337H4X0rElf"
                subtitle="Tues Jan 2, 1968"
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
              />
              <CardText>All dwarfs are belong to me</CardText>
              <CardActions>
                <Button label="Details" />
              </CardActions>
            </Card>
          </Col>
          <Col sm={6} md={3}>
            <Card style={{width: '250px'}}>
              <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title="GlobinBossHelga"
                subtitle="Wed Jan 3, 1969"
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
              />
              <CardText>wow first comment</CardText>
              <CardActions>
                <Button label="Details" />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
