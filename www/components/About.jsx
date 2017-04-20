import React from 'react'
import { PageHeader, Button, Panel, Jumbotron, ListGroupItem, ListGroup, Grid, Row, Col, Table } from 'react-bootstrap'
import Paper from 'material-ui/Paper'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import UnitTestModal from './UnitTestModal.jsx'

const style = {
  margin: 50,
  display: 'block'
}

var About = React.createClass({
  getInitialState () {
    return {
      activeKey: '1'
    }
  },

  handleSelect (activeKey) {
    this.setState({ activeKey })
  },
  render: function () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>

            {/* ---------
                BEGINNING
                ---------
            */}
            <h1>About Reddiful API</h1>
            <hr />
            <br />

            {/* TEAM MEMBERS */}
            <h2>Team Name Members</h2>
            <hr />
            <Jumbotron>
              <Grid>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/David.jpg' className='img-responsive' />
                    <h3>David Du</h3>
                    <p>I'm a junior majoring in Computer Science. I like to game, which is closely related to why I want to go into the game development industry.</p>
                    <p>Responsibilities: Documentation, Front-end</p>
                    <p>No. Commits: 61</p>
                    <p>No. Issues: 18</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Johnny.jpg' className='img-responsive center-block' />
                    <h3>Johnny Knoebel</h3>
                    <p>I'm a junior majoring in Computer Science. I enjoy watching TV, video games, and making Pylint happy.</p>
                    <p>Responsibilities: Models, Unit Tests</p>
                    <p>No. Commits: 41</p>
                    <p>No. Issues: 4</p>
                    <p>No. Unit Tests: 10</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Thomas.jpg' className='img-responsive' />
                    <h3>Thomas Lam</h3>
                    <p>I'm a Junior CS Major from Cypress, Texas.</p>
                    <p>Responsibilities: Data Collection, Front-end and Back-end bug fixes</p>
                    <p>No. Commits: 60</p>
                    <p>No. Issues: 10</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/Jeremy.jpeg' className='img-responsive center-block' />
                    <h3>Jeremy Lim</h3>
                    <p>Computer Science Major. Likes books and Battlestar Galatica. Hobby is to read online web novels.</p>
                    <p>Responsibilities: Front-end boilerplate code, Coordination, Coding React Components</p>
                    <p>No. Commits: 74</p>
                    <p>No. Issues: 18</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/austinm.jpg' className='img-responsive center-block' />
                    <h3>Austin Middleton</h3>
                    <p>I am an avid rock climber with an interest in peer-to-peer tech</p>
                    <p>Responsibilities: Flask, Docker, and some React components</p>
                    <p>No. Commits: 62</p>
                    <p>No. Issues: 16</p>
                    <p>No. Unit Tests: 13</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Shea.jpeg' className='img-responsive center-block' />
                    <h3>Shea Rozmiarek</h3>
                    <p>I'm a junior CS major from Liberty Hill, Texas. I love to game and pet fluffy animals.</p>
                    <p>Responsibilities: Front-end</p>
                    <p>No. Commits: 18</p>
                    <p>No. Issues: 8</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
            <hr />
            <br />

            {/* THIRD PARTY TOOLS */}
            <h2>Tools</h2>
            <hr />
            <Jumbotron>
              <Grid>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/Slack.jpg' height='155' width='155' />
                    <h3>Slack</h3>
                    <p>Slack is used as our main form of communication. We integrated other services: Travis CI and Github, so that we can keep track of commits and builds. These are all separated into a different channel, and we have other channels to keep track of general work, emails, and schedules.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Docker.jpeg' height='155' width='155' />
                    <h3>Docker</h3>
                    <p>Docker is used to generate local instances of our server. This allowed us to preview our webpage, test it, modify it, and change the layout locally before pushing and viewing on the website. This allows for much easier and fluid testing instead of having to wait for other people to finish their work.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Bootstrap.png' height='155' width='155' />
                    <h3>Bootstrap</h3>
                    <p>Bootstrap is used as part of the front-end. It's another Javascript library based in React that allows us to use "prettier" design: things like the Navigation bar, the Panels, and Grids are all done through Bootstrap.</p>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/Webpack.png' height='155' width='155' />
                    <h3>Webpack</h3>
                    <p>Webpack is used to bundle our modules that works with Babel to transpile the code.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/PostCSS.png' height='155' width='155' />
                    <h3>PostCSS</h3>
                    <p>PostCSS is needed for some modules. It allows us to bundle Javascript and CSS.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Babel.png' height='155' width='155' />
                    <h3>Babel</h3>
                    <p>Babel is used to transpile the Javascript files after Webpack finishes bundling them. It makes code work.</p>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/React.svg' height='155' width='155' />
                    <h3>React</h3>
                    <p>React is used as part of the front-end. This Javascript library allows us to not only design our websites in a more user-friendly manner, but also to use other integrations like Bootstrap.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Flask.png' height='155' width='155' />
                    <h3>Flask</h3>
                    <p>Flask is used for our backend. It handles HTTP requests and responses for RESTful request dispatching.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/SQLAlchemy.png' height='155' width='155' />
                    <h3>SQLAlchemy</h3>
                    <p>SQLAlchemy is used to build our database. We use it to format and define relationships, models, and attributes of our database tables.</p>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/AWS.png' height='155' width='155' />
                    <h3>AWS</h3>
                    <p>AWS is used to host our website.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Github.png' height='155' width='155' />
                    <h3>Github</h3>
                    <p>Github is used to share our code. This is connected to Travis CI so that we can check to make our builds are passing.</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/TravisCI.jpeg' height='155' width='155' />
                    <h3>Travis CI</h3>
                    <p>Travis CI is used to check if our code is building properly.</p>
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
            <hr />
            <br />

            {/* GITHUB INFO */}
            <ListGroup>
              <h3>Github Stats - <a href='http://docs.reddiful.apiary.io'>Apiary API</a> - <a href='https://github.com/dmd2588/idb/issues'>GitHubIssueTracker</a> - <a href='https://github.com/dmd2588/idb/'>Github Repo</a></h3>
              <ListGroupItem>total no. of commits: 314</ListGroupItem>
              <ListGroupItem>total no. of issues: 70</ListGroupItem>
              <ListGroupItem>total no. of unit tests: 23</ListGroupItem>
            </ListGroup>

            {/* UNIT TESTS */}
            <UnitTestModal />
            <br />

            {/* EXTRA TOOLS */}
            <Panel header={<h3>Tools</h3>}>
              <p>Used React and Bootstrap for main frontend. Webpack to compile ES6 jsx files. Babel to translate ES6 to javascript. React-toolbox, modernize, material-ui for touch up components. Docker used to manage back-end dependencies. Python for the back-end logic. Flask as the API logic server. Makefile to encode the workflow. Gunicorn for the flask webserver. For more info see the Tools section of the Technical Report below.</p>
            </Panel>
            <hr />
            <br />

            {/* ------------
                REPORT START
                ------------
            */}
            <PageHeader>Technical Report</PageHeader>

            {/* TOC */}
            <Button onClick={() => this.setState({ open: !this.state.open })}>
              Table of Contents <FaAngleDown />
            </Button>
            <Panel collapsible expanded={this.state.open}>
              <ListGroup>
                <ListGroupItem><a href='#intro'>Introduction</a></ListGroupItem>
                <ListGroupItem>
                  <p><a href='#design'>Design</a></p>
                  <ul>
                    <li><a href='#models' onClick={() => this.setState({ open1: true })}>Models</a></li>
                    <li><a href='#relationships' onClick={() => this.setState({ open2: true })}>Relationships</a></li>
                    <li><a href='#attributes' onClick={() => this.setState({ open3: true })}>Attributes and Methods</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#tools'>Tools</a></p>
                  <ul>
                    <li><a href='#front' onClick={() => this.setState({ open4: true })}>Front-end</a></li>
                    <li><a href='#back' onClick={() => this.setState({ open5: true })}>Back-end</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#hosting'>Hosting</a></p>
                  <ul>
                    <li><a href='#choice' onClick={() => this.setState({ open6: true })}>Choice</a></li>
                    <li><a href='#setup' onClick={() => this.setState({ open7: true })}>Set-up</a></li>
                    <li><a href='#accessibility' onClick={() => this.setState({ open8: true })}>Accessibility</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#database'>Database</a></p>
                  <ul>
                    <li><a href='#phase1' onClick={() => this.setState({ open14: true })}>Phase 1 Implementation</a></li>
                    <li><a href='#choice2' onClick={() => this.setState({ open11: true })}>Choice</a></li>
                    <li><a href='#implementation' onClick={() => this.setState({ open12: true })}>Implementation</a></li>
                    <li><a href='#sqlal' onClick={() => this.setState({ open13: true })}>SQLAlchemy</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#api'>API</a></p>
                  <ul>
                    <li><a href='#front2' onClick={() => this.setState({ open15: true })}>Front-end</a></li>
                    <li><a href='#users1' onClick={() => this.setState({ open16: true })}>Users</a></li>
                    <li><a href='#subreddits1' onClick={() => this.setState({ open17: true })}>Subreddits</a></li>
                    <li><a href='#posts1' onClick={() => this.setState({ open18: true })}>Posts</a></li>
                    <li><a href='#comments1' onClick={() => this.setState({ open19: true })}>Comments</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#search'>Search</a></p>
                  <ul>
                    <li><a href='#intro3' onClick={() => this.setState({ open23: true })}>Introduction</a></li>
                    <li><a href='#ep' onClick={() => this.setState({ open24: true })}>Inside the Mind of a Search Call</a></li>
                    <li><a href='#query' onClick={() => this.setState({ open25: true })}>Query Algorithm</a></li>
                    <li><a href='#preview' onClick={() => this.setState({ open26: true })}>Preview and Highlighting</a></li>
                    <li><a href='#org' onClick={() => this.setState({ open27: true })}>Organization of Search Results</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#pp'>Planning Poker</a></p>
                  <ul>
                    <li><a href='#choice3' onClick={() => this.setState({ open20: true })}>Choice</a></li>
                    <li><a href='#us1' onClick={() => this.setState({ open21: true })}>User Stories</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#viz'>Visualization</a></p>
                  <ul>
                    <li><a href='#bg2' onClick={() => this.setState({ open28: true })}>Background</a></li>
                    <li><a href='#wwd' onClick={() => this.setState({ open29: true })}>What We Did</a></li>
                  </ul>
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#diagrams'>Diagrams and Other</a></p>
                  <ul>
                    <li><a onClick={() => this.setState({ open9: true })} href='#uml'>UML Diagram</a></li>
                    <li><a href='#tablec' onClick={() => this.setState({ open0: true })}>Table of Components</a></li>
                  </ul>
                </ListGroupItem>
              </ListGroup>
            </Panel>

            {/* INFORMATION */}
            <h3>Group Name: <small>Team Name</small></h3>
            <h3>Members: <small>David Du, Johnny Knoebel, Thomas Lam, Jeremy Lim, Austin Middleton, Shea Rozmiarek</small></h3>
            <br />

            {/* INTRO */}
            <Panel id='intro' header='Introduction' bsStyle='info'>
              <p>This is an analytical compilation of Reddit. We are providing a top-level view of Reddit. This top level view includes metadata, summary data and the relationships for most of the top information on Reddit. Since Reddit has a vast variety of content it can be hard for a user to explore Reddit in a succinct manner from a top-down approach. This API allows for a quick browse, with supplemented analytics to concisely explore the range of content that Reddit fields. This can be used for anything from data analysis of information like the "toxicity" of a subreddit to creating personas of certain groups of people to better market products to that demographic.</p>
            </Panel>

            {/* DESIGN */}
            <Panel id='design' header='Design' bsStyle='info'>
              <p>We are using the Reddit API to define our models and attributes. For the structure, we first used UML to plan how the models would look and interact with one another. We have four models we are working with: Subreddits, Users, Posts, and Comments. For the UML diagram see at the end of the report in the Diagrams section.</p>
              <p>These models define most of the characteristics, but we are thinking of defining a separate model for the trophies in the user profiles. This is because each trophy has several attributes and will be more easily represented in a separate model from the user. After defining several characteristics, we scraped some data and found that certain attributes would be infeasible while other, new ones could be added. This allowed us to redefine several attributes to more accurately reflect the information provided by the Reddit API.</p>
              <p>While defining the attributes for the models, we also looked at the relationships between each of those models. By observing the interaction on Reddit, we could condense them into the relationships and attributes that you see below.</p>
              <Button id='models' onClick={() => this.setState({ open1: !this.state.open1 })}>
                Models <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open1}>
                <p>The models represent different aspects of Reddit that make up most of the information seen on the site.</p>
                <h5><b>User</b></h5>
                <p>The users represent the people on the site. They can explore the different subreddits, interact with others, and communicate their ideas. They can form new groups (subreddits), start new conversations (posts), and contribute to existing ones (comments). Reddit would not have any worth without the users to keep giving ideas. Organizing user information can be used to observe different trends like the relationship between different interests in subreddits.</p>
                <h5><b>Subreddit</b></h5>
                <p>Subreddits are groups of any number of users that have come together and found a common interest. By organizing like-minding people into a group, it allows for meaningful (or not) discussion on a topic that everyone present is interested in. Compiling this information introduces the opportunity to observe group trends anywhere from what kind of language is used to the activity per user.</p>
                <h5><b>Post</b></h5>
                <p>Posts ask questions, discuss topics, and introduce ideas. There is so much information out there that bringing it into a concentrated form of a post can clarify things that would otherwise have gone unnoticed to most of the population. Looking at posts can bring light to the way users communicate information within a subreddit; for example, are there more questions being asked or is everyone trying to bring their own idea out into the open? What kind of information is important to the users of Reddit?</p>
                <h5><b>Comment</b></h5>
                <p>Comments are generally short blurbs that hopefully contribute to the conversation, whether by questioning an idea or making a witty remark. Combined with posts, they can be used to answer questions, challenge ideas, or entertain other users. When looking at the types of comments posted, there are trends that can be observed. For example, there are several users that are dedicated to doing specific things, like AWildSketchAppeared - he mostly replies with sketches reflecting a previous comment or post. Other comments maybe have similarities in the type of response; the gaming subreddit usually contains comments that are reactionary to the post and don't generally provide some insight into the deeper meaning of life.</p>
              </Panel>
              <Button id='relationships' onClick={() => this.setState({ open2: !this.state.open2 })}>
                Relationships <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open2}>
                <p>There are many relationships between the different models. The way they interact helps organize the transmission of information between different entities.</p>
                <h5><b>User</b></h5>
                <p>The User and Subreddit have a many to many relationship where for each user, there are many subreddits that they are subscribed to, and for each subreddit, there are many users subscribed to it. With the current information given to us, we are currently focusing on the relationship between the moderators and the subreddit, since getting the information like the subreddits that a user is subscribed to and the users subscribed to a subreddit are both things that we cannot access. The User and Post have a 1 to many relationship as well since each user has many (if any) posts. Similarly, the User and Comment have a 1 to many relationship.</p>
                <h5><b>Subreddit</b></h5>
                <p>The Subreddit and Post have a 1 to many relationship: each subreddit has many posts (hopefully), while each post can only belong to one subreddit (but can be crossposted elsewhere). For our relationship model, we're focusing on the 1 to many relationship. Subreddits also have a 1 to many relationship with comments: comments store the ID of the subreddit that they exist in.</p>
                <h5><b>Post</b></h5>
                <p>Posts have a 1 to many relationship with Comments: each post has many comments (hopefully), while each comment can only belong to one post.</p>
              </Panel>
              <Button id='attributes' onClick={() => this.setState({ open3: !this.state.open3 })}>
                Attributes and Methods <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open3}>
                <p>Several attributes and methods to access those attributes help define each model. Some are foreign keys in other models that help relate them back to each other.</p>
                <h5><b>User</b></h5>
                <p>The user has several attributes that can be listed. First, there are two identifiers: the name (username itself), and the ID (a unique ID number that can be used to find the user). In addition, the user has comment and link karma as well as the created time. Finally, we check to see if the user is gilded and/or verified. Gilded will return true only if the user is currently gilded, and a user is verified if Reddit has confirmed the ID of a celebrity.</p>
                <h5><b>Subreddit</b></h5>
                <p>Subreddits are defined similarly to a user: they each have a display name and a unique ID. In addition, it also has a creation time. Adding to this, subreddits also have a title that can be modified to more concretely describe what it is about. Furthermore, for statistics on users in each subreddit, there are attributes listing the accounts active on the subreddit and the number of total subscribers for that subreddit. Finally, there are two attributes holding the image links for the icon and the banner of the subreddit.</p>
                <h5><b>Post</b></h5>
                <p>Each post has several different attributes and defining characteristics. First, The post itself has a unique ID similar to how subreddits and users have unique IDs. In addition, posts have a field for the created time. Several defining characteristics are the gilded, self, and over_18 booleans. These attributes are true/false booleans that check if the post is gilded, over_18, or is a text post (self). If it is a post with self = true, then it will have information in the selftext attribute that contains the string with the text in the post. If not, it will be an empty string. The title of a post is the title that you see as a headline, and the score represents the karma of the post. Next, there is a field for the URL which links you to where you go when you click on the title: whether it be the comments section if it's a self-post, or the Imgur, Gfycat, etc. if it is not a self-post. For each post, there is an upvote ratio that shows how "likable" a certain post is. Similarly, there is a number of comments to show how many people have decided to discuss or add on to the post. There is a preview of the post, which shows a JSON preview of what the post will look like, and there is a thumbnail with a picture (or not) of the post. Finally, there are sections relating to users and subreddits. There are fields for the author and subreddit which aren't foreign keys but just show the name of each. Also, there are fields for the author and subreddit IDs which are foreign keys.</p>
                <p>There are cases when the post exists and the poster has since deleted the account or vice versa. In each case, the deleted portion is replaced with a default user called [deleted] or just the '[deleted]' string. In addition, if a post does not conform to the guidelines of a subreddit, a moderator can delete the content.</p>
                <h5><b>Comment</b></h5>
                <p>The comments are pretty straightforward. For most, you will have an author and a body as the commenter and the comment, respectively. For the body, there is an additional attribute showing the HTML version of the body. In this case, the author id is a foreign key related back to the user's unique ID and the author is just the name of the commenter. Second, there is an ID for both the comment and the link. The ID for the comment is the unique ID similar to those seen in the previous models. The link ID is the foreign key relating back to the ID of the post. The one different attribute is the edited attribute. This allows you to see the last time a comment has been edited. The rest of the attributes are similar to other attributes: the creation time, whether or not it is gilded, and the score or karma of the comment.</p>
                <p>Similarly to posts, comments can also be deleted or have a deleted commenter, so the sections will be substituted with [deleted].</p>
              </Panel>
            </Panel>

            {/* TOOLS */}
            <Panel id='tools' header='Tools' bsStyle='info'>
              <p>This section describes the tools and resources we used to both help design the site and to make it easier on the eyes.</p>
              <Button id='front' onClick={() => this.setState({ open4: !this.state.open4 })}>
                Front-end <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open4}>
                <p>These tools help the site look better and feel better to use.</p>
                <h5><b>Libraries and Tools</b></h5>
                <p>React and Bootstrap are the primary UI elements. Bootstrap is the react-bootstrap library that has compatibility with via react components. This allowed us to format our information in a more organized way; for example, we used Bootstrap to format this page. Other front-end libraries in use are react-toolbox for the grid cards and for the grid layout the react-bootstrap layout components. The front end is compiled from ES6 JSX files using webpack via Babel translator from jsx to a bundle.js file that contains the entirety of the page content and frontend libraries for deployment. Flask is the web server that serves up the all of the frontend files. PostCSS is a dependency used by react-toolbox for its themes. The UI is supplemented with icons from react-icons which allows us to use material design icons without the hassle of installing and configuring them. The Moments CSS library is used to supplement the fonts on the details page and grid of cards.</p>
                <h5><b>Front-end Tool Configurations</b></h5>
                <p>Webpack is configured via the webpack.config.js file which specifies where the entry point of the application files is and where the compiled final distribution javascript file should be located. The current Webpack file is configured to compile jsx via Babel to ES2015, and CSS via PostCSS. The package.json file contains the dependency information for both the development and production front-end libraries as well as ways to build and run the application via npm. Run <code>npm install</code> to install dependencies. Run <code>npm build run</code> to compile the JSX files and run the application on the Docker webserver. The makefile contains ways to build/compile the application via: <code>make build</code></p>
                <h5><b>Front-end Structure</b></h5>
                <p>Starting from the root directory, www/ folder contains all the front-end code. Within this folder, there is the index.html file which is the main HTML file that is served by the web server. The components/ folder contains all of the JSX files that will compose into the application. Each .jsx file is a single component. The App.jsx file is the react component main entry point into the application. It is the file that will render all other components and is the root of the web application front-end logic; linking the .jsx to the index.html page. All other components are as stated. For example. RFGrid.jsx holds the grid component and NavBarAPI.jsx holds the navbar component for our application</p>
                <h5><b>Running Frontend</b></h5>
                <p>Running the front-end can be done after compilation/build of the application. Running the application is done by using the command <code>docker-compose up</code> which runs the application on a flask server locally at <b>localhost:80</b> or alternatively by running <code>make dev_build</code> will run a node server at <b>localhost:8080</b></p>
              </Panel>
              <Button id='back' onClick={() => this.setState({ open5: !this.state.open5 })}>
                Back-end <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open5}>
                <p>These tools set up the site so that it runs smoothly and doesn't break (hopefully).</p>
                <h5><b>Back-end Structure</b></h5>
                <p>Starting from the root of the application. The reddiful/ folder contains the api.py files that compose the back-end API of the application. The api.py file is the main entry point for the flask webserver. This file also contains all of the routes that will be used for the API backend call to retrieve data to be displayed in the front-end. In the app/ folder is the test.py and model.py files. Model unit tests which test the validity of the DB data is in the test.py file. SQLAlchemy is used for mapping the database rows to a python object, this is defined in the model.py file.</p>
                <h5><b>Python and Flask</b></h5>
                <p>For setting up Python and Flask please see below for the Docker setup, as the Docker container freezes the dependencies for these. Python is used for the back-end logic. Flask is the web server that is used to serve up the application. In order to run Flask manually, the following commands must be given from the root directory <code>export FLASK_APP=reddiful/api.py </code> and then the command <code>flask run </code> to actually run the application. Alternatively running <code> docker-compose up </code> will run the application via the Docker file. For the python back-end API specifications please see the Design section above or the apiary documentation at http://docs.reddiful.apiary.io/. In addition, the apiary documentation itself can be loaded into apiary using the apiary.apib file that is found in the repo.</p>
                <h5><b>Docker</b></h5>
                <p> Docker container is used to install the preliminary dependencies for the back-end. Please see above for installing the front-end dependencies via npm. The docker container is used to ensure that all back-end dependencies are the same for every environment. The Docker configuration for the installation of said dependencies is done in the Dockerfile file. This specifies the OS and other installation software. The docker-compose.yml file is the file that defines and initiates the web server using Flask.</p>
              </Panel>
            </Panel>

            {/* HOSTING */}
            <Panel id='hosting' header='Hosting' bsStyle='info'>
              <Button id='choice' onClick={() => this.setState({ open6: !this.state.open6 })}>
                Choice <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open6}>
                <p>For hosting we decided to go with Amazon Web Services (AWS) since a couple of us were familiar with it.  We set up a single t2.micro ec2 instance in US-West-2B to host our application.</p>
              </Panel>
              <Button id='setup' onClick={() => this.setState({ open7: !this.state.open7 })}>
                Set-up <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open7}>
                <p>To set up an ec2 instance you navigate to the ec2 dashboard from the AWS console and click launch instance.  You will first have to select which machine image you would like the instance to be set to.  The machine image contains the configuration for the operating system as well as preinstalled software.  Our instance was configured with Amazon's 64 bit Linux AMI.  Next, you have to select the instance type which we selected t2.micro for.  The t2.micro instance is a low-cost general purpose instance type that has 1 vCPU, 1 GiB of memory, and a default 8 GiB Elastic Block Store volume associated with it. Amazon lists websites and applications as use cases for this type so it was a good fit for our goals. It is also free tier eligible which allowed us to host our application on AWS for free for up to a year.  At this point, the instance is ready to launch.</p>
              </Panel>
              <Button id='accessibility' onClick={() => this.setState({ open8: !this.state.open8 })}>
                Accessibility <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open8}>
                <p>An elastic IPv4 IP was allocated and assigned to the instance and added to the DNS record on Namecheap by navigating to Elastic IPs under Network & Security on the AWS console. To allow all group members access to the instance, public key information for each group member was added to the .ssh/authorized_keys file. The application is deployed on AWS simply by pulling the repository from GitHub and running Docker with the settings we have in the repo.</p>
              </Panel>
            </Panel>

            {/* DATABASE */}
            <Panel id='database' header='Database' bsStyle='info'>
              <p>The Database is interfaced with SQLAlchemy. He</p>
              <Button id='phase1' onClick={() => this.setState({ open14: !this.state.open14 })}>
                Set-up <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open14}>
                Link to the source here: <a href='https://www.reddit.com/dev/api/'>Reddit API</a>
                <h4>Data Collection Process</h4>
                <p>For the example models used in the first phase of the project, data was scraped using the Reddit API.  The official Reddit git repository lists several <a href='https://github.com/reddit/reddit/wiki/API-Wrappers'>wrappers for the API</a>.  For the scraper written for our project, PRAW, a python wrapper around the API was used.</p>
                <p>In order to keep the example dataset at three examples for each model as well as having linked examples, the data was gathered in a specific way.  Three subreddits were chosen: from each of those subreddits, one of the moderators was chosen; for each of those moderators, their most recent comment was chosen, and for each comment the submission it resided in was chosen.</p>
                <p>Data was scraped for the chosen examples using PRAW's built in classes for each model as well as GET requests to the API endpoints because not all the attributes we wanted were available through the wrapper's built in classes.  The example data was stored as lists of dictionaries and dumped as json to be used in the front end.</p>
              </Panel>
              <Button id='choice2' onClick={() => this.setState({ open11: !this.state.open11 })}>
                Choice <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open11}>
                <p>For the database, we used an Amazon RDS instance. RDS is Amazon's Relation Database Service that sets up the database software on a machine for you. We went with RDS because we were already on AWS and having their service set up the software was much easier than trying to set it up ourselves on the ec2 instance that we are running the server code on or trying to set up a Docker container for the database.</p>
              </Panel>
              <Button id='implementation' onClick={() => this.setState({ open12: !this.state.open12 })}>
                Implementation <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open12}>
                <p>The instance runs PostgreSQL 8.5 on a db.t2.micro instance with 1GB of memory and 5GB of storage. PgAdmin 4, a PostgreSQL 8.5 client, was used to connect to the database and create the schemas for the tables. The server code connects to the database using SQLAlchemy and an environment variable with the database URL so that we wouldn't push the credentials to the public repo.</p>
              </Panel>
              <Button id='sqlal' onClick={() => this.setState({ open13: !this.state.open13 })}>
                SQLAlchemy <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open13}>
                <p>SQLAlchemy is used to extract data from the database. We query the database by using the models from the previous part to build a dictionary for each row of the data and return the list of rows. The queries can be filtered by any attribute of the models. Integers, floats, and date-times are filtered by giving a min and max range; all other data types, like bools and strings, are filtered by finding an exact match. It can sort by any attribute in ascending or descending order, and it defaults to sorting by the unique id in ascending order. It supports pagination by taking in several results per page and a page to return to, 25 results per page and which defaults to page 0, respectively. It also returns the number of pages that a query would fill. Finally, there are functions that perform joins on relationships, such as for users and posts, which returns all the posts that a given user has made.</p>
              </Panel>
            </Panel>

            {/* API */}
            <Panel id='api' header='API' bsStyle='info'>
              <p>The API is comprised of 4 main categories: users, posts, comments, and subreddits.</p>
              <p>The API presents a RESTful interface that allows for easy understanding of the API. The API also supports pagination, sorting, and filtering for the endpoints that return a collection of objects. These features are specified in the query part of the request URL. The pagination allows for specifying the current page and the page size. The filtering allows for filtering based on integer ranges and exact matches. Sorting sorts on a column and can be ascending or descending.</p>
              <Button id='front2' onClick={() => this.setState({ open15: !this.state.open15 })}>
                Front-end <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open15}>
                <p>The front-end API request framework mirrors the back-end python API in terms of interfacing with obtaining collections and individuals IDs. The front-end API request framework bridges the back-end API calls to the front-end UI input elements. The `options` parameter is the input object that dictates the changes as to what the front-end grid displays. The filter, sort and page attributes are the main dynamic attributes that will be inputted. The API wrapper will then dynamically build the query string when the corresponding call is made using the callback provided. This callback is the main gateway that the RfGrid component will use to get its inputs across to be turned into the query string. The options that are provided for the sort and filter were manually curated and defined in each Model.jsx file. This was because each model has a great variance of attributes.</p>
              </Panel>
              <Button id='users1' onClick={() => this.setState({ open16: !this.state.open16 })}>
                Users <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open16}>
                <p>/users/ gets the whole users collection. This is the most general users call.</p>
                <p>/users/(string:user_id) gets a specific user. You can check other attributes of this user from here. From this user ID, you can check all the comments and posts that they have posted as well as all the subreddits that the specified user is a moderator for.</p>
                <p>/users/(string:user_id/comments gets the collection of comments made by a specific user. /users/(string:user_id)/posts gets the collection of posts made by a specific user. /users/(string:user_id)/subs gets the collection of subreddits the specified user is a moderator for.</p>
              </Panel>
              <Button id='subreddits1' onClick={() => this.setState({ open17: !this.state.open17 })}>
                Subreddits <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open17}>
                <p>/subreddits/ gets the collection of subreddits. This is the most general subreddits call.</p>
                <p>/subreddits/(string:subreddit_id) gets a specific subreddit. You can check other attributes of this subreddit from here. From this subreddit ID, you can check the posts and moderators within this subreddit.</p>
                <p>/subreddits/(string:subreddit_id)/posts gets the collection of posts for a specific subreddit. /subreddits/(string:subreddit_id)/mods get the collection of users who are moderators for a specific subreddit.</p>
              </Panel>
              <Button id='posts1' onClick={() => this.setState({ open18: !this.state.open18 })}>
                Posts <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open18}>
                <p>/posts/ gets the collection posts. This is the most general posts call.</p>
                <p>/posts/(string:post_id) gets a specific post. You can check other attributes of this post from here. From this post ID, you can check all the comments that are under this post.</p>
                <p>/posts/(string:post_id)/comments - get the collection of comments for a specific post</p>
              </Panel>
              <Button id='comments1' onClick={() => this.setState({ open19: !this.state.open19 })}>
                Comments <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open19}>
                <p>/comments/ gets the collection of comments. This is the most general comments call.</p>
                <p>/comments/(string:comment_id) gets a specific comment. You can check other attributes of this comment from here. Since there aren’t any relationships that have this is a parent, you must check the data inside of this ID to reference back to other models.</p>
              </Panel>
            </Panel>

            {/* SEARCH */}
            <Panel id='search' header='Search' bsStyle='info'>
              <p>This section outlines the addition of a search capability and what it entails.</p>
              <Button id='intro3' onClick={() => this.setState({ open23: !this.state.open23 })}>
                Introduction <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open23}>
                <p>The most time that we spent on phase three was on the search algorithm. This was the big thing to do in this section and required quite a bit of work. There were many steps that were needed to get the whole thing working.</p>
                <p>Outside of the sections listed below: endpoints, the query algorithm, the preview and highlighting, and the organization of search results, there were many hours put into making sure that everything ran smoothly. Bug testing and fixing was a big deal in making sure that searching worked as intended.</p>
              </Panel>
              <Button id='ep' onClick={() => this.setState({ open24: !this.state.open24 })}>
                Inside the Mind of a Search Call <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open24}>
                <p>This section outlines how the endpoints were set up and where they pointed to.</p>
                <p>Searching starts at the front-end with the user. From here, after the user requests a search through the search bar, the front-end code sends this request to the getSearch method in api.js. The request is routed through api.py and axiom - a JavaScript library that wraps the http request in a user-friendly way - to query.py, where the algorithm takes place.</p>
                <p>The results from query.py encompass all models - as in, the search query searches through each model for any hits with keywords. After the result is sent back up to the front-end, the rest of the work happens. Here is where regex and filtering code is used to separate "AND" and "OR" results from one another. Follow this is some logic to determine the preview.</p>
                <p>After the preview is determined, the results are rendered into a Component that returns highlighting for keywords through a React library. After all this is finished, the user is finally able to view the results on the screen. All these results have special IDs that determine which model they came from. When clicking on a result, the logic routes you to the correct model page.</p>
              </Panel>
              <Button id='query' onClick={() => this.setState({ open25: !this.state.open25 })}>
                Query Algorithm <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open25}>
                <p>Our algorithm started off as a basic query. As it evolved, we added the ability for pagination and cleaned up the parsing and trimming.</p>
                <p>First, we set up a basic algorithm. In query.py, all it does is loops through each model to check for any matches. These matches are sent to the front-end where it splits the results into "AND" and "OR" using regular expressions.</p>
                <p>Later, we added the pagination through the search page. Pages were limited to 10 search results per page, but the code in place would allow us to give an option to show more results per page. In addition, the regular expression parsing was cleaned up and the preview was trimmed such that the results would be more readable for the user.</p>
                <p>While keeping this in mind, we needed to make sure that the preview would be done during this time as well. The algorithm sets up all the information such that the preview and rendering will happen smoothly.</p>
              </Panel>
              <Button id='preview' onClick={() => this.setState({ open26: !this.state.open26 })}>
                Preview and Highlighting <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open26}>
                <p>Each search result has a preview section. This section is meant to provide a quick peek into what the search result is all about. During the query, if there was a match in the search result, we needed to make sure to grab a portion of the result to display as the preview. Our ideal algorithm would grab the section or sections of the result that would display the most keywords while also giving enough context around the words. We also wanted to make sure that those keywords were highlighted.</p>
                <p>What we decided to do was to have the query run in the back-end and have the preview algorithm be done in the front-end, after the results are returned. The preview is found by finding the most matches of keywords in 100 characters before and after the highest density of keywords. The way we calculated density was by TODO</p>
                <p>In each preview, we highlighted the keywords that were displayed in each section. We used a React library called react-highlight-words that checks for words in the preview that are keywords and highlights them. The library allows us to create a Highlighter object that just highlights specified words for us.</p>
              </Panel>
              <Button id='org' onClick={() => this.setState({ open27: !this.state.open27 })}>
                Organization of Search Results <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open27}>
                <p>For the basic organization, we were required to separate the search results into "AND" and "OR" results. This separation was easy (were all the keywords in it or were they not), and mostly boiled down to how to format it in the front-end.</p>
                <p>To split up the search results, we first returned the search results from the query to the front-end. In the front-end, the first thing we do is separate the results using regular expressions. Using some of the information that we saw in class with parsing example strings, we could parse the JSON results very effectively and quickly into two different sets of results.</p>
                <p>Results are then sent to containers which are grouped with ten per page. We did have a problem with the pagination where the search page would show five pages of results regardless of the actual number of results, but we pinpointed the problem and fixed it without much hassle.</p>
              </Panel>
            </Panel>

            {/* PLANNING POKER */}
            <Panel id='pp' header='Planning Poker' bsStyle='info'>
              <p>This section describes the site we used to do our planning poker, the user stories that we went through, and some description of how it went down.</p>
              <Button id='choice3' onClick={() => this.setState({ open20: !this.state.open20 })}>
                Choice <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open20}>
                <p>The site that we chose to use was <a href='https://www.planningpoker.com/'>planningpoker.com</a>. There weren't many discrepancies between the sites and this section didn't take very long. The longest portion of time was eaten up when coming up with user stories, not actually rating them.</p>
              </Panel>
              <Button id='us1' onClick={() => this.setState({ open21: !this.state.open21 })}>
                User Stories <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open21}>
                <p>Coming up with the user stories took up the most time in this section. Here are the user stories that we came up with for planning poker:</p>
                <ul>
                  <li>
                    <p>Have the search page display search results.</p>
                    <p>This is just for the search page to send you to a page that shows up relevant results.</p>
                    <p>We estimated this to take around 5 hours and it took around 2 or 3 hours. The page itself was not as hard to create as we expected: we ended up knowing how to do most of it since we have created several pages already.</p>
                  </li>
                  <li>
                    <p>Search page endpoints.</p>
                    <p>Have the search page connect to the database and the front-end properly with endpoints.</p>
                    <p>We estimated this to take around 8 hours and it took around 1 hour. I am not sure why we decided it would take 8 hours, but it did not.</p>
                  </li>
                  <li>
                    <p>Search page queries.</p>
                    <p>Have the queries search through information in the database and return relevant information. This is for a minimally satisfactory query.</p>
                    <p>We estimated this to take around 13 hours and it took around 15 hours.</p>
                  </li>
                  <li>
                    <p>Have the search page highlight.</p>
                    <p>This encompasses both the preview and highlighting words such that they show up in the preview.</p>
                    <p>We estimated this to take around 8 hours and it took around 4 or 5 hours. This was not as hard to do since we found a convenient library that did most of the work for us.</p>
                  </li>
                  <li>
                    <p>Have the search page organize results properly.</p>
                    <p>This is making the search results display in an organized fashion separating results with "AND" keywords and "OR" keywords; in other words, separating results with all the keywords and some of the keywords.</p>
                    <p>We estimated this to take around 3 hours and it took around 4 or 5 hours. This took a little longer than we expected since parsing the information took a bit of work.</p>
                  </li>
                  <li>
                    <p>Add more filtering options.</p>
                    <p>The current set of filtering options could be expanded more. We're looking to add some options that are useful that aren't yet in (like date filters).</p>
                    <p>We estimated this to take around 8 hours and it took around 3 hours. We ended up not having too think to hard when adding the new filtering options since we already had a couple already implemented for the last phase.</p>
                  </li>
                  <li>
                    <p>Talk to other group about their project.</p>
                    <p>This includes all the talking time needed to communicate information effectively between groups as well as implement a page on our website that displays a visualization of something related to their group's project.</p>
                    <p>We estimated this to take around 40 hours and it took around 15 hours. I felt like we miscommunicated a little bit here since we were thinking that just talking to the group would take a while, but in the end, it didn't since we were able to get their API endpoint and make a visualization in not too much time.</p>
                  </li>
                  <li>
                    <p>Presentation.</p>
                    <p>This encompasses creating the presentation and creating the critique of the other group's project.</p>
                    <p>We estimated this to take around 8 hours and to be decided on the number of hours it will take.</p>
                  </li>
                  <li>
                    <p>Update the technical report.</p>
                    <p>This is all about adding in all the information (Planning poker, search, etc.) related to anything being done as part of this phase of the project. This also refers to the aesthetic changes made in the About page during this phase.</p>
                    <p>We estimated this to take around 3 hours and it took around 8 or 9 hours. Writing and proofreading took more hours than normal, but even then, the estimation was on the lower side.</p>
                  </li>
                  <li>
                    <p>Getting 10 User Stories.</p>
                    <p>As one of the first user stories thought up, it was one of the more difficult to estimate. This is because we were coming up with user stories before we started thinking about how long it would take. In addition, when we evaluated it, it was already completed.</p>
                    <p>We estimated this to take around 100 hours and it took around half an hour. After looking back carefully, we might have overestimated the time it would take to complete the user stories. With the requirements listed out for us, it didn't take us long to look through each part that was needed to be done and figure out the checkpoints for each section.</p>
                  </li>
                </ul>
              </Panel>
            </Panel>

            {/* Visualization */}
            <Panel id='viz' header='Visualization' bsStyle='info'>
              <p>In this section, we're going to talk a little bit about the visualization that we did: where it came from and how we did it.</p>
              <Button id='bg2' onClick={() => this.setState({ open28: !this.state.open28 })}>
                Background <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open28}>
                <p>The group that we based our visualization on was the MarvelDB group (TODO link and more words).</p>
              </Panel>
              <Button id='wwd' onClick={() => this.setState({ open29: !this.state.open29 })}>
                What We Did <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open29}>
                <p>We decided to TODO</p>
              </Panel>
            </Panel>

            {/* DIAGRAMS */}
            <Panel id='diagrams' header='Diagrams & Other' bsStyle='info'>
              <Button id='uml' onClick={() => this.setState({ open9: !this.state.open9 })}>
                UML Diagram <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open9}>
                <p>Here is our UML Diagram</p>
                <br />
                <img src='/dist/images/UML.png' height='1573' width='306' />
              </Panel>
              <Button id='tablec' onClick={() => this.setState({ open0: !this.state.open0 })}>
                Table of Components <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open0}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Component File</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>App.jsx</td>
                      <td>Application entry point, contains the page Routing logic</td>
                    </tr>
                    <tr>
                      <td>About.jsx</td>
                      <td>Defines the About page with the Technical Report</td>
                    </tr>
                    <tr>
                      <td>CommentDetails.jsx</td>
                      <td>Defines the links between comments and other models</td>
                    </tr>
                    <tr>
                      <td>Comments.jsx</td>
                      <td>Defines the Reddit Comments page</td>
                    </tr>
                    <tr>
                      <td>Details.jsx</td>
                      <td>Allows linking to other models</td>
                    </tr>
                    <tr>
                      <td>Home.jsx</td>
                      <td>Defines the Home page</td>
                    </tr>
                    <tr>
                      <td>NavBarAPI.jsx</td>
                      <td>Defines the Navigation Bar and the links to other pages</td>
                    </tr>
                    <tr>
                      <td>PostDetails.jsx</td>
                      <td>Defines the links between posts and other models</td>
                    </tr>
                    <tr>
                      <td>Posts.jsx</td>
                      <td>Defines the Reddit Posts page</td>
                    </tr>
                    <tr>
                      <td>RfCard.jsx</td>
                      <td>Defines the Card component that represents each instance in the Grid</td>
                    </tr>
                    <tr>
                      <td>RfGrid.jsx</td>
                      <td>Defines the Grid that displays the Cards, takes a list of JSON object instances to display into Cards</td>
                    </tr>
                    <tr>
                      <td>SortFilter.jsx</td>
                      <td>Defines the filtering and sorting box for each model</td>
                    </tr>
                    <tr>
                      <td>SubredditDetails.jsx</td>
                      <td>Defines the links between subreddits and other models</td>
                    </tr>
                    <tr>
                      <td>Subreddits.jsx</td>
                      <td>Defines the Reddit Subreddit page</td>
                    </tr>
                    <tr>
                      <td>UserDetail.jsx</td>
                      <td>Defines the links between users and other models</td>
                    </tr>
                    <tr>
                      <td>Users.jsx</td>
                      <td>Defines the Reddit Users page</td>
                    </tr>
                  </tbody>
                </Table>
              </Panel>
            </Panel>
          </div>
        </Paper>
      </div>
    )
  }
})

export default About
