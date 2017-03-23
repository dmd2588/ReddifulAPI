import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { Grid, Row, Col } from 'react-bootstrap';

export default function Users () {
  return (
    <div>
      <h2>Users</h2>
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <Card style={{width: '250px'}}>
              <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title="Bob the Dwarf Warrior"
                subtitle="Joined: Thr July 12, 2007"
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
              />
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
                subtitle="Joined: Fri Jan 9, 2006"
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
              />
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
                subtitle="Joined: Wed May 3, 2103"
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
              />
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
