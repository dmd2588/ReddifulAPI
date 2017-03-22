import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-bootstrap';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';


const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

const gridInstance = (
    <Grid>
    <Row className="show-grid">
      <Col sm={6} md={3}><Card style={{width: '250px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card></Col>
      <Col sm={6} md={3}><Card style={{width: '250px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card></Col>
      <Col sm={6} md={3}><Card style={{width: '250px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card></Col>
      <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
    </Row>
  </Grid>
  
);

var MyGrid = React.createClass({
        render: function() {
          return (
              gridInstance
    )
            }
});

export default MyGrid;