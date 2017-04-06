import React from 'react'
import { Carousel } from 'react-bootstrap'
import { blueGrey900 } from 'material-ui/styles/colors'

import { Link } from 'react-router-dom'

var Home = React.createClass({
  render: function () {
    return (
      <div id='Carousel' style={{position: 'fixed', backgroundColor: blueGrey900}}>
        <Carousel>
          <Carousel.Item>
            <img width={window.innerWidth} alt='Users' src='https://placeimg.com/1140/500/people' />
            <Carousel.Caption>
              <h3><Link to='/users'>Users</Link></h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={window.innerWidth} alt='Subreddits' src='https://placeimg.com/1140/500/arch' />
            <Carousel.Caption>
              <h3><Link to='/subreddits'>Subreddits</Link></h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={window.innerWidth} alt='Posts' src='https://placeimg.com/1140/500/animals' />
            <Carousel.Caption>
              <h3><Link to='/posts'>Posts</Link></h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={window.innerWidth} alt='Comments' src='https://placeimg.com/1140/500/tech' />
            <Carousel.Caption>
              <h3><Link to='/comments'>Comments</Link></h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
})

export default Home
