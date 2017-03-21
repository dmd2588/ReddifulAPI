import React from 'react'

var About = React.createClass({
        render: function() {
          return (
            <div><h2>About</h2>
			<h3>Team Name Presents: Reddiful API</h3>
			<p>David Du, Johnny Knoebel, Thomas Lam, Jeremy Lim, Austin Middleton, Shea Rozmiarek</p>
			<h3>Introduction</h3>
			<p>This is an analytical compilation of reddit. Problems. Use cases.</p>
			<h3>Design</h3>
			<p>Restful API</p>
			<h3>Tools</h3>
			<p>For our front-end, we are going to be using React. For our back-end, we are going to be using Python and Flask.</p>
			<h3>Hosting</h3>
			<p>We are using AWS for our hosting service</p>
			<h3>Other</h3>
			<p>Diagram 1</p>
			</div>
          )
        }
});

export default About;