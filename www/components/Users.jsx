import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Panel} from 'react-bootstrap';

var moment = require('moment');
var userData = [{"name": "batman_jr", "created": 1405828618.0, "link_karma": 335, "comment_karma": 190, "id": "hh8mr", "email": "None"}, {"name": "poizan42", "created": 1331171212.0, "link_karma": 768, "comment_karma": 25419, "id": "74344", "email": "poizan@poizan.dk"}, {"name": "Ooer", "created": 1287044616.0, "link_karma": 18834, "comment_karma": 56852, "id": "4fer6", "email": "ooer@live.com"}];

export default function Users () {
  var dates = [new Date(0), new Date(0), new Date(0)];
  for (var i = 0; i < 3; i++) {
    dates[i].setUTCSeconds(userData[i].created);
  }
  return (
    <div>
      <h2>Users</h2>
      <Row>
        <Col sm={12} md={3}>
          <div>
            <Panel header="Filtering and Sorting">
                <FormGroup controlId="filterText">
                  <ControlLabel>Filter Text</ControlLabel>
                  <FormControl componentClass="input" type="text" placeholder="Search" />
                </FormGroup>
        	    <FormGroup controlId="filterSelect">
        	      <ControlLabel>Filter by Attribute</ControlLabel>
        	      <FormControl componentClass="select">
        	        <option value="name">Name</option>
        	        <option value="link_karma">Link Karma</option>
        	        <option value="comment_karma">Comment Karma</option>
        	      </FormControl>
        	    </FormGroup>
        	    <FormGroup controlId="sortSelect">
        	      <ControlLabel>Sort by Attribute</ControlLabel>
        	      <FormControl componentClass="select">
        	        <option value="name">Name</option>
        	        <option value="link_karma">Link Karma</option>
        	        <option value="comment_karma">Comment Karma</option>
        	      </FormControl>
        	    </FormGroup>
            </Panel>
          </div>
        </Col>
        <Col sm={12} md={9}>
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={3}>
                <Card style={{width: '250px'}}>
                  <CardTitle
                    avatar="https://placeimg.com/80/80/animals"
                    title={userData[0].name}
                    subtitle={"Joined: " + moment(dates[0]).format("LL")}
                  />
                  <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                  />
                  <CardActions>
                    <Button href={"/users/detail/" + userData[0].id} label="Details" />
                  </CardActions>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card style={{width: '250px'}}>
                  <CardTitle
                    avatar="https://placeimg.com/80/80/animals"
                    title={userData[1].name}
                    subtitle={"Joined: " + moment(dates[1]).format("LL")}
                  />
                  <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                  />
                  <CardActions>
                    <Button href={"/users/detail/" + userData[1].id} label="Details" />
                  </CardActions>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card style={{width: '250px'}}>
                  <CardTitle
                    avatar="https://placeimg.com/80/80/animals"
                    title={userData[2].name}
                    subtitle={"Joined: " + moment(dates[2]).format("LL")}
                  />
                  <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                  />
                  <CardActions>
                    <Button href={"/users/detail/" + userData[2].id} label="Details" />
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </div>
  )
}
