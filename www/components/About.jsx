import React from 'react'
import {PageHeader, Panel, Accordion, Well, Jumbotron,ListGroupItem, ListGroup} from 'react-bootstrap';
import TiArrowDown from 'react-icons/lib/ti/arrow-down';
var About = React.createClass({
		getInitialState() {
			return {
			    activeKey: '1'
			};
		},

		handleSelect(activeKey) {
			this.setState({ activeKey });
		},
        render: function() {
          return (
              <div>
            <PageHeader>About</PageHeader>
              <Jumbotron>
            <h1>Team Name Presents: <small>Reddiful API</small></h1>
			 <p>By: David Du, Johnny Knoebel, Thomas Lam, Jeremy Lim, Austin Middleton, Shea Rozmiarek</p>
              </Jumbotron>
              <hr/>
              
              <ListGroup>
              <h3>Github Stats - <a href="docs.reddiful.apiary.io">Apiary API</a> - <a href="https://github.com/dmd2588/ReddifulAPI/issues">GitHubIssueTracker</a> -  <a href="https://github.com/dmd2588/ReddifulAPI/">Github Repo</a></h3> 
                <ListGroupItem>total no. of commits: 55</ListGroupItem>
                <ListGroupItem>total no. of issues: 17</ListGroupItem>
                <ListGroupItem>total no. of unit tests: 13</ListGroupItem>
             </ListGroup>
              <Panel header={ <h3>Data</h3>}>
                  Link to the source here: <a href="https://www.reddit.com/dev/api/">Reddit API</a>
                  <h4>Data Collection Process</h4>
                  <p></p>
              </Panel>
              <br/>
                
            <PageHeader>Technical Report</PageHeader>
            <h3>Group Name: <small>Team Name</small></h3>
            <h3>Members: <small>David Du, Johnny Knoebel, Thomas Lam, Jeremy Lim, Austin Middleton, Shea Rozmiarek</small></h3>
            <br/>

			<Panel header = {<h3>Introduction       <TiArrowDown/></h3>} bsStyle = "info">
			 <p>This is an analytical compilation of Reddit. We are providing a top-level view of Reddit, and we are showing summary data and the relationships for most of the information on Reddit. This can be used for anything from data analysis of information like the "toxicity" of a subreddit to creating personas of certain groups of people to better market products to that demographic.</p>
			</Panel>
			<Panel header = {<h3>Design             <TiArrowDown/></h3>} bsStyle = "info">
			 <p>We are using the Reddit API to define our models and attributes. For the structure, we first used UML to plan out how the models would look and interact with one another. We have four models we are working with: Subreddits, Users, Posts, and Comments.</p>
			 <p>These models define the majority of characteristics, but we are thinking of defining a separate model for the trophies in the user profiles. This is because each trophy has several attributes and will be more easily represented in a separate model from the user. After defining several characteristics, we scraped some data and found that certain attributes would be infeasible while other, new ones could be added. This allowed us to redefine several attributes to more accurately reflect the information provided by the Reddit API.</p>
			 <p>While defining the attributes for the models, we also took a look at the relationships between each of those models. By observing the interaction on Reddit, we were able to condense them into the relationships and attributes that you see below.</p>
			 <Accordion>
				<Panel header = "Models" eventKey = "1">
				 <p>The models represent different aspects of Reddit that make up most of the information seen on the site.</p>
					<h5><b>User</b></h5>
					 <p>The users represent the people on the site. They can explore the different subreddits, interact with others, and communicate their ideas. They are able to form new groups (subreddits), start new conversations (posts), and contribute to existing ones (comments). Reddit would not have any worth without the users to keep giving ideas. Organizing user information can be used to observe different trends like the relationship between different interests in subreddits.</p>
					<h5><b>Subreddit</b></h5>
					 <p>Subreddits are groups of any number of users that have come together and found a common interest. By organizing like-minding people into a group, it allows for meaningful (or not) discussion on a topic that everyone present is interested in. Compiling this information introduces the opportunity to observe group trends anywhere from what kind of language is used to the activity per user.</p>
					<h5><b>Post</b></h5>
					 <p>Posts ask questions, discuss topics, and introduce ideas. There is so much information out there that bringing it into a concentrated form of a post can clarify things that would otherwise have gone unnoticed to most of the population. Looking at the posts can bring light to the kind of information that users in a subreddit may want to express; for example, are there more questions being asked or is everyone trying to bring their own idea out into the open? What kind of information is important to the users of Reddit?</p>
					<h5><b>Comment</b></h5>
					 <p>Comments are generally short blurbs that hopefully contribute to the conversation, whether by questioning an idea or making a witty remark. Combined with posts, they can be used to answer questions, challenge ideas, or entertain other users. When looking at the types of comments posted, there are trends that can be observed. For example, there are several users that are dedicated to doing specific things, like AWildSketchAppeared - he mostly replies with sketches reflecting a previous comment or post. Other comments maybe have similarities in the type of response; the gaming subreddit usually contains comments that are reactionary to the post and don't generally provide some insight into the deeper meaning of life.</p>
				</Panel>
				<Panel header = "Relationships" eventKey = "2">
				 <p>There are many relationships between the different models. The way they interact helps organize the transmission of information between different entities.</p>
					<h5><b>User</b></h5>
					 <p>The User and Subreddit have a many to many relationship where for each user, there are many subreddits that they are subscribed to, and for each subreddit, there are many users subscribed to it. With the current information given to us, we are currently focusing on the relationship between the moderators and the subreddit, since getting the information like the subreddits that a user is subscribed to and the users subscribed to a particular subreddit are both things that we cannot access. The User and Post have a 1 to many relationship as well since each user has many (if any) posts. Similarly, the User and Comment have a 1 to many relationship.</p>
					<h5><b>Subreddit</b></h5>
					 <p>The Subreddit and Post have a 1 to many relationship: each subreddit has many posts (hopefully), while each post can only belong to one subreddit (but can be crossposted elsewhere). For our relationship model, we're focusing on the 1 to many relationship. Subreddits also have a 1 to many relationship with comments: comments store the ID of the subreddit that they exist in.</p>
					<h5><b>Post</b></h5>
					 <p>Posts have a 1 to many relationship with Comments: each post has many comments (hopefully), while each comment can only belong to one post.</p>
				</Panel>
				<Panel header = "Attributes and Methods" eventKey = "3">
				 <p>Several attributes and methods to access those attributes help define each model. Some are foreign keys in other models that help relate them back to each other.</p>
					<h5><b>User</b></h5>
					 <p>The user has several attributes that can be listed. First, there are two identifiers: the name (username itself), and the ID (a unique ID number that can be used to find the user). In addition, if the user allows it, the email will be displayed as well. Finally, the user has comment and link karma as well as the created time.</p>
					<h5><b>Subreddit</b></h5>
					 <p>Subreddits are defined similarly to a user: they each have a display name and a unique ID. In addition, it also has a creation time. Adding to this, subreddits also have a title that can be modified to more concretely describe what it is about. Finally, for statistics on users in each subreddit, there are attributes listing the accounts active on the subreddit and the number of total subscribers for that subreddit.</p>
					<h5><b>Post</b></h5>
					 <p>Each post has several different attributes and defining characteristics. First, the author of the post is a foreign key going to the ID of the poster. The post itself has a unique ID similar to how subreddits and users have unique IDs. In addition, posts have a field for the created time. Several defining characteristcs are the gilded, self, and nsfw booleans. These attributes are true/false booleans that check if the post is gilded, nsfw, or is a text post (self). If it is a post with self = true, then it will have information in the selftext attribute that contains the string with the text in the post. If not, it will be an empty string. The title of a post is the title that you see as a headline, and the score represents the karma of the post. Finally, there is a field for the URL which links you to where you go when you click on the title: whether it be the comments section if it's a self post, or the imgur, gfycat, etc. if it is not a self post.</p>
					 <p>There are cases when the post exists and the poster has since deleted the account or vice versa. In each case, the deleted portion is replaced with a default user called [deleted] or just the '[deleted]' string. In addition, if a post does not conform with the guidelines of a subreddit, a moderator can delete the content.</p>
					<h5><b>Comment</b></h5>
					 <p>The comments are pretty straightforward. For most, you will have an author and a body as the commentor and the comment, respectively. In this case, the author is a foreign key related back to the user's unique ID. Second, there is an ID for both the comment, the link, and the subreddit. The ID for the comment is the unique ID similar to those seen in the previous models. The link ID is the foreign key relating back to the ID of the post. Similarly, the subreddit ID is the foreign key relating back to the ID of the subreddit. The one different attribute is the edited attribute. This allows you to see if a comment has been edited or not. The rest of the attributes are similar to other attributes: the creation time, whether or not it is gilded, and the score or karma of the comment.</p>
					 <p>Similarly to posts, comments can also be deleted or have a deleted commentor, so the sections will be substituted with [deleted].</p>
				</Panel>
			 </Accordion>
			</Panel>
			<Panel header = {<h3>Tools              <TiArrowDown/></h3>} bsStyle = "info">
			 <p>This section describes the tools and resources we used to both help design the site and to make it easier on the eyes.</p>
			 <Accordion>
			    <Panel header = "Front-end" eventKey = "1">
				 <p>These tools help the site look better and feel better to use.</p>
					<h5><b>Libraries and Tools</b></h5>
					 <p>React and Bootstrap are the primary UI elements. Bootstrap is the react-bootstrap library that has compatibility with via react components. This allowed us to format our information in a more organized way; for example, we used Boostrap to format this page. Other front-end libraries in use is react-toolbox for the grid cards and for the grid layout the react-bootstrap layout components. The front end is compiled from ES6 JSX files using webpack via Babel translator from jsx to a bundle.js file that contains the entirety of the page content and frontend libraries for deployment. Flask is the webserver that serves up the all of the frontend files. PostCSS is a dependency used by react-toolbox for its themes. The UI is supplemented with icons from react-icons which allows us to use material design icons without the hassle of installing and configuring them. The Moments css library is used to supplement the fonts on the details page and grid of cards.</p>
					<h5><b>Front-end Tool Configurations</b></h5>
					 <p>Webpack is configured via the webpack.config.js file which specifies where the entrypoint of the application files is and where the compiled final distribution javascript file should be located. The current webpack file is configured to compile jsx via Babel to ES2015, and css via Postcss. The package.json file contains the dependency information for both the development and production front-end libraries as well as ways to build and run the application via npm. Run npm install - to install dependecies. Run npm build run - to compile the JSX files and run the application on the docker webserver. The makefile contains ways to build/compile the application via -  make build.</p>
					<h5><b>Front-end Structure</b></h5>
			         <p>Starting from the root directory, www/ folder contains all of the front-end code. Within this folder there is the index.html file which is the main html file that is served by the webserver. The components/ folder contains all of the JSX files that will compose into the application. Each .jsx file is a single component. The App.jsx file is the react component main entry point into the application. It is the file that will render all other components and is the root of the web application front-end logic; linking the .jsx to the index.html page. All other components are as stated. For example. RFGrid.jsx holds the grid component and NavBarAPI.jsx holds the navbar component for our application</p>
					<h5><b>Running Frontend</b></h5>
					 <p>Running the front-end can be done after compilation/build of the application. Running the application is done by using the command - docker-compose up which runs the application on a flask server locally at localhost:80 or alternatively by running - make dev_build will run a node server at localhost:8080</p>
				</Panel>
			    <Panel header = "Backend" eventKey = "2">
				 <p>These tools set up the site so that it runs smoothly and doesn't break (hopefully).</p>
					<h5><b>Back-end Structure</b></h5>
					 <p>Starting from the root of the application. The reddiful/ folder contains the api.py files that compose the back-end api of the application. The api.py file is the main entry point for the flask webserver. This file aso contains all of the routes that will be used for the API backend call to retrieve data to be displayed in the front-end. In the app/ folder is the test.py and model.py files. Model unit tests which test the validitiy for the db data is in the test.py file. SQLAlchemy is used for mapping the database rows to a python object, this is defined in the model.py file.</p>
					<h5><b>Python and Flask</b></h5>
					 <p>For setting up python and flask please see below for the Docker setup, as the docker container freezes the dependencies for these. Python is used for the back-end logic. Flask is the webserver that is used to serve up the application. In order to run flask manually the following commands must be given from the root directory export FLASK_APP=reddiful/api.py - and then the command - flask run - to actually run the application. Alternatively running - docker-compose up - will run the application via the docker file. For the python back-end api specifications please see the Design section above or the apiary documentation at http://docs.reddiful.apiary.io/ . In addition the apiary documentation itself can be loaded into apiary using the apiary.apib file that is found in the repo.</p>
					<h5><b>Docker</b></h5>
					 <p> Docker container is used to install the preliminary dependecies for the back-end. Please see above for installing the front-end dependecies via npm. The docker container is used to ensure that all back-end dependencies are the same for every environment. The docker configuration for the installation of said dependencies is done in the Dockerfile file. This specifies the OS and other installation software. The docker-compose.yml file is the file that defines and initiates the webserver using flask.</p>
				</Panel>
			 </Accordion>
			</Panel>
			<Panel header = {<h3>Hosting            <TiArrowDown/></h3>} bsStyle = "info">
			 <p>For hosting we decided to go with Amazon Web Services (AWS) since a couple of us were familiar with it.  We set up a single t2.micro ec2 instance in US-West-2B to host our application.</p>
			<p>To set up an ec2 instance you navigate to the ec2 dashboard from the aws console and click launch instace.  You'll first have to select which machine image you would like the instance to be set to.  The machine image contains the configuration for the operating system as well as preinstalled software.  Our instance was configured with Amazon's 64 bit Linux AMI.  Next you have to select the instance type which we selected t2.micro for.  The t2.micro instance is a low cost general purpose instance type that has 1 vCPU, 1 GiB of memory, and a default 8 GiB Elastic Block Store volume associated with it. Amazon lists websites and applications as use cases for this type so it was a good fit for our goals. It's also free tier eligible which allowed us to host our application on AWS for free for up to a year.  At this point the instance is ready to launch.</p>
			<p>An elastic IPv4 IP was allocated and assigned to the instance and added to the dns record on namecheap by navigating to Elastic IPs under Network & Security on the AWS console. To allow all group members access to the instace, public key information for each group member was added to the .ssh/authorized_keys file. The application is deployed on AWS simply by pulling the repository from github and runing docker with the settings we have in the repo.</p>
			</Panel>
			</div>
          )
        }
});

export default About;
