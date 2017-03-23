import React from 'react'
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom'

var Home = React.createClass({
        render: function() {
          return (
		  <div>
            <div><h2>Home</h2></div>
			<Carousel>
				<Carousel.Item>
					<img width={1140} height={500} alt="Users" src="https://placeimg.com/1140/500/people"/>
					<Carousel.Caption>
						<h3><Link to="/users">Users</Link></h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img width={1140} height={500} alt="Subreddits" src="https://placeimg.com/1140/500/arch"/>
					<Carousel.Caption>
						<h3><Link to="/subreddits">Subreddits</Link></h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img width={1140} height={500} alt="Posts" src="https://placeimg.com/1140/500/animals"/>
					<Carousel.Caption>
						<h3><Link to="/posts">Posts</Link></h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img width={1140} height={500} alt="Comments" src="https://placeimg.com/1140/500/tech"/>
					<Carousel.Caption>
						<h3><Link to="/comments">Comments</Link></h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
          )
        }
});

export default Home;