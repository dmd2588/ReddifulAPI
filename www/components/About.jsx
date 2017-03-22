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
			<p>We are using the Reddit API to define our models and attributes. For the structure, we first used UML to plan out how the models would look and interact with one another. We have four models we are working with: Subreddits, Users, Posts, and Comments.</p>
			<p>These models define the majority of characteristics, but we are thinking of defining a separate model for the trophies in the user profiles. This is because each trophy has several attributes and will be more easily represented in a separate model from the user. After defining several characteristics, we scraped some data and found that certain attributes would be infeasible while other, new ones could be added. This allowed us to redefine several attributes to more accurately reflect the information provided by the Reddit API.</p>
			<p>While defining the attributes for the models, we also took a look at the relationships between each of those models. By observing the interaction on Reddit, we were able to condense them into the relationships and attributes that you see below.</p>
			<h4>Models</h4>
			<p>The models represent different aspects of Reddit that make up most of the information seen on </p>
			<h5><b>User</b></h5>
			<p></p>
			<h5><b>Subreddit</b></h5>
			<p></p>
			<h5><b>Post</b></h5>
			<p></p>
			<h5><b>Comment</b></h5>
			<p></p>
			<h4>Relationships</h4>
			<p>There are many relationships between the different models. The way they interact helps organize the transmission of information between different entities.</p>
			<h5><b>User</b></h5>
			<p>The User and Subreddit have a many to many relationship where for each user, there are many subreddits that they are subscribed to, and for each subreddit, there are many users subscribed to it. The User and Post have a 1 to many relationship as well since each user has many (if any) posts. Similarly, the User and Comment have a 1 to many relationship.</p>
			<h5><b>Subreddit</b></h5>
			<p>The Subreddit and Post have a 1 to many relationship: each subreddit has many posts (hopefully), while each post can only belong to one subreddit (but can be crossposted elsewhere). For our relationship model, we're focusing on the 1 to many relationship. Subreddits also have a 1 to many relationship with comments: comments store the ID of the subreddit that they exist in.</p>
			<h5><b>Post</b></h5>
			<p>Posts have a 1 to many relationship with Comments: each post has many comments (hopefully), while each comment can only belong to one post.</p>
			<h4>Attributes and Methods</h4>
			<p>Several attributes and methods to access those attributes help define each model. Some are foreign keys in other models that help relate them back to each other.</p>
			<h5><b>User</b></h5>
			<p>The user has several attributes that can be listed. First, there are two identifiers: the name (username itself), and the ID (a unique ID number that can be used to find the user). In addition, if the user allows it, the email will be displayed as well. Finally, the user has comment and link karma as well as the created time.</p>
			<h5><b>Subreddit</b></h5>
			<p>Subreddits are defined similarly to a user: they each have a display name and a unique ID. In addition, it also has a creation time. Adding to this, subreddits also have a title that can be modified to more concretely describe what it is about. Finally, for statistics on users in each subreddit, there are attributes listing the accounts active on the subreddit and the number of total subscribers for that subreddit.</p>
			<h5><b>Post</b></h5>
			<p>Each post has several different attributes and defining characteristics. First, the author of the post is a foreign key going to the username of the poster. The post itself has a unique ID similar to how subreddits and users have unique IDs. In addition, posts have a field for the created time. Several defining characteristcs are the gilded, self, and nsfw booleans. These attributes are true/false booleans that check if the post is gilded, nsfw, or is a text post (self). If it is a post with self = true, then it will have information in the selftext attribute that contains the string with the text in the post. If not, it will be an empty string. The title of a post is the title that you see as a headline, and the score represents the karma of the post. Finally, there is a field for the URL which links you to where you go when you click on the title: whether it be the comments section if it's a self post, or the imgur, gfycat, etc. if it is not a self post.</p>
			<p>There are cases when the post exists and the poster has since deleted the account or vice versa. In each case, the deleted portion is replaced with a default user called [deleted] or just the '[deleted]' string. In addition, if a post does not conform with the guidelines of a subreddit, a moderator can delete the content.</p>
			<h5><b>Comment</b></h5>
			<p>The comments are pretty straightforward. For most, you will have an author and a body as the commentor and the comment, respectively. In this case, the author is a foreign key related back to the user's unique ID. Second, there is an ID for both the comment, the link, and the subreddit. The ID for the comment is the unique ID similar to those seen in the previous models. The link ID is the foreign key relating back to the ID of the post. Similarly, the subreddit ID is the foreign key relating back to the ID of the subreddit. The rest of the attributes are similar to other attributes: the creation time, whether or not it is gilded, and the score or karma of the comment.</p>
			<p>Similarly to posts, comments can also be deleted or have a deleted commentor, so the sections will be substituted with [deleted].</p>
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