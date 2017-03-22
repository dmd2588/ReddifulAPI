import React from 'react'

var About = React.createClass({
        render: function() {
          return (
            <div><h2>About</h2>
			<h3>Team Name Presents: Reddiful API</h3>
			<p>David Du, Johnny Knoebel, Thomas Lam, Jeremy Lim, Austin Middleton, Shea Rozmiarek</p>
			<h3>Introduction</h3>
			<p>This is an analytical compilation of Reddit. We are providing a top-level view of Reddit. We're showing summary data and the relationships between all the information on Reddit. This can be used for anything from data analysis of information like the "toxicity" of a subreddit to creating personas of certain groups of people to better market products to that demographic.</p>
			<h3>Design</h3>
			<p>We are using Restful API to design our project. For the structure, we used UML to plan out how the models would look and interact with one another. First, we have four models we are working with: Subreddits, Users, Posts, and Comments.</p>
			<h4>Relationships</h4>
			<h5>User</h5>
			<p>The User and Subreddit have a 1 to many relationship where for each user, there are many subreddits that they are subscribed to. The User and Post have a 1 to many relationship as well since each user has many (if any) posts. Similarly, the User and Comment have a 1 to many relationship.</p>
			<h5>Subreddit</h5>
			<p>Placeholder</p>
			<h5>Post</h5>
			<p>Placeholder</p>
			<h5>Comment</h5>
			<p>Placeholder</p>
			<h4>Attributes and Methods</h4>
			<h5>User></h5>
			<p>Placeholder</p>
			<h5>Subreddit</h5>
			<p>Placeholder</p>
			<h5>Comment</h5>
			<p>Placeholder</p>
			<h5>Comment</h5>
			<p>Placeholder</p>
			<h3>Tools</h3>
			<p>For our front-end, we are going to be using React. For our back-end, we are going to be using Python and Flask.</p>
			<h3>Hosting</h3>
			<p>We are using AWS for our hosting service.</p>
			<h3>Other</h3>
			<p>Diagram 1</p>
			</div>
          )
        }
});

export default About;