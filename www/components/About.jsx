import React from 'react'
import { PageHeader, Button, Panel, Jumbotron, ListGroupItem, ListGroup, Grid, Row, Col, Table } from 'react-bootstrap'
import Paper from 'material-ui/Paper'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import UnitTestModal from './UnitTestModal.jsx'
// import Link from 'react-scroll'

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
            <h1>About Reddiful API</h1>
            <hr />
            <br />
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
                    <p>No. Commits: 39</p>
                    <p>No. Issues: 9</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Johnny.jpg' className='img-responsive center-block' />
                    <h3>Johnny Knoebel</h3>
                    <p>I'm a junior majoring in Computer Science. I enjoy watching TV, video games, and making Pylint happy.</p>
                    <p>Responsibilities: Models, Unit Tests</p>
                    <p>No. Commits: 10</p>
                    <p>No. Issues: 2</p>
                    <p>No. Unit Tests: 10</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Thomas.jpg' className='img-responsive' />
                    <h3>Thomas Lam</h3>
                    <p>I'm a Junior CS Major from Cypress, Texas.</p>
                    <p>Responsibilities: Data Collection, Front-end and Back-end bug fixes</p>
                    <p>No. Commits: 14</p>
                    <p>No. Issues: 5</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                </Row>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/Jeremy.jpeg' className='img-responsive center-block' />
                    <h3>Jeremy Lim</h3>
                    <p>Computer Science Major. Likes books and Battlestar Galatica. Hobby is to read online web novels.</p>
                    <p>Responsibilities: Front-end boilerplate code, Coordination, Coding React Components</p>
                    <p>No. Commits: 25</p>
                    <p>No. Issues: 9</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/austinm.jpg' className='img-responsive center-block' />
                    <h3>Austin Middleton</h3>
                    <p>I am an avid rock climber with an interest in peer-to-peer tech</p>
                    <p>Responsibilities: Flask, Docker, and some React components</p>
                    <p>No. Commits: 40</p>
                    <p>No. Issues: 8</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                  <Col lg={4}>
                    <img src='/dist/images/Shea.jpeg' className='img-responsive center-block' />
                    <h3>Shea Rozmiarek</h3>
                    <p>I'm a junior CS major from Liberty Hill, Texas. I love to game and pet fluffy animals.</p>
                    <p>Responsibilities: Front-end</p>
                    <p>No. Commits: 5</p>
                    <p>No. Issues: 4</p>
                    <p>No. Unit Tests: 0</p>
                  </Col>
                </Row>
              </Grid>
            </Jumbotron>
            <hr />
            <br />
            <h2>Tools</h2>
            <hr />
            <Jumbotron>
              <Grid>
                <Row className='show-grid'>
                  <Col lg={4}>
                    <img src='/dist/images/Slack.jpg' height='155' width='155' />
                    <h3>Slack</h3>
                    <p>Slack is used as our main form of communication. We integrated other services: Travis CI and Github, so that we are able to keep track of commits and builds. These are all separated into a different channel, and we have other channels to keep track of general work, emails, and schedules.</p>
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
            <ListGroup>
              <h3>Github Stats - <a href='http://docs.reddiful.apiary.io'>Apiary API</a> - <a href='https://github.com/dmd2588/idb/issues'>GitHubIssueTracker</a> - <a href='https://github.com/dmd2588/idb/'>Github Repo</a></h3>
              <ListGroupItem>total no. of commits: 155</ListGroupItem>
              <ListGroupItem>total no. of issues: 27</ListGroupItem>
              <ListGroupItem>total no. of unit tests: 10</ListGroupItem>
            </ListGroup>
            <UnitTestModal />
            <br />
            <Panel header={<h3>Data</h3>}>
              Link to the source here: <a href='https://www.reddit.com/dev/api/'>Reddit API</a>
              <h4>Data Collection Process</h4>
              <p>For the example models used in the first phase of the project, data was scraped using the Reddit API.  The official reddit git repository lists several <a href='https://github.com/reddit/reddit/wiki/API-Wrappers'>wrappers for the API</a>.  For the scraper written for our project, PRAW, a python wrapper around the API was used.</p>
              <p>In order to keep the example data set at three examples for each model as well as having linked examples, the data was gathered in a specific way.  Three subreddits were chosen and from each of those subreddits one of the moderators was chosen and for each of those moderators their most recent comment was chosen and for each comment the submission it resided in was chosen.</p>
              <p>Data was scraped for the chosen examples using PRAW's built in classes for each model as well as GET requests to the API endpoints because not all the attributes we wanted were available through the wrapper's built in classes.  The example data was stored as lists of dictionaries and dumped as json to be used in the front end.</p>
            </Panel>
            <Panel header={<h3>Tools</h3>}>
              <p>Used React and Bootstrap for main frontend. Webpack to compile ES6 jsx files. Babel to translate ES6 to javascript. React-toolbox, modernize, material-ui for touch up components. Docker used to manage back-end dependencies. Python for the back-end logic. Flask as the API logic server. Makefile to encode the workflow. Gunicorn for the flask webserver. For more info see the Tools section of the Technical Report below.</p>
            </Panel>
            <hr />
            <br />
            <PageHeader>Technical Report</PageHeader>
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
                </ListGroupItem>
                <ListGroupItem>
                  <p><a href='#api'>API</a></p>
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
            <h3>Group Name: <small>Team Name</small></h3>
            <h3>Members: <small>David Du, Johnny Knoebel, Thomas Lam, Jeremy Lim, Austin Middleton, Shea Rozmiarek</small></h3>
            <br />
            <Panel id='intro' header='Introduction' bsStyle='info'>
              <p>This is an analytical compilation of Reddit. We are providing a top-level view of Reddit. This top level view includes metadata, summary data and the relationships for most of the top information on Reddit. Since Reddit has a vast variety of content it can be hard for a user to explore Reddit in an succinct manner from a top down approach. This API allows for a quick browse, with supplemented analytics to concisely explore the range of content that Reddit fields. This can be used for anything from data analysis of information like the "toxicity" of a subreddit to creating personas of certain groups of people to better market products to that demographic.</p>
            </Panel>
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
                <p>Each post has several different attributes and defining characteristics. First, The post itself has a unique ID similar to how subreddits and users have unique IDs. In addition, posts have a field for the created time. Several defining characteristics are the gilded, self, and nsfw booleans. These attributes are true/false booleans that check if the post is gilded, over_18, or is a text post (self). If it is a post with self = true, then it will have information in the selftext attribute that contains the string with the text in the post. If not, it will be an empty string. The title of a post is the title that you see as a headline, and the score represents the karma of the post. Next, there is a field for the URL which links you to where you go when you click on the title: whether it be the comments section if it's a self post, or the imgur, gfycat, etc. if it is not a self post. For each post, there is an upvote ratio that shows how "likeable" a certain post is. Similarly, there is a number of comments to show how many people have decided to discuss or add on to the post. There is a preview of the post, which shows a JSON preview of what the post will look like, and there is a thumbnail with a picture (or not) of the post. Finally, there are sections relating to users and subreddits. There are fields for the author and subreddit which aren't foreign keys but just show the name of each. Also, there are fields for the author and subreddit IDs which are foreign keys.</p>
                <p>There are cases when the post exists and the poster has since deleted the account or vice versa. In each case, the deleted portion is replaced with a default user called [deleted] or just the '[deleted]' string. In addition, if a post does not conform with the guidelines of a subreddit, a moderator can delete the content.</p>
                <h5><b>Comment</b></h5>
                <p>The comments are pretty straightforward. For most, you will have an author and a body as the commenter and the comment, respectively. For the body, there is an additional attribute showing the html version of the body. In this case, the author id is a foreign key related back to the user's unique ID and the author is just the name of the commentor. Second, there is an ID for both the comment and the link. The ID for the comment is the unique ID similar to those seen in the previous models. The link ID is the foreign key relating back to the ID of the post. The one different attribute is the edited attribute. This allows you to see if a comment has been edited or not. The rest of the attributes are similar to other attributes: the creation time, whether or not it is gilded, and the score or karma of the comment.</p>
                <p>Similarly to posts, comments can also be deleted or have a deleted commenter, so the sections will be substituted with [deleted].</p>
              </Panel>
            </Panel>
            <Panel id='tools' header='Tools' bsStyle='info'>
              <p>This section describes the tools and resources we used to both help design the site and to make it easier on the eyes.</p>
              <Button id='front' onClick={() => this.setState({ open4: !this.state.open4 })}>
                Front-end <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open4}>
                <p>These tools help the site look better and feel better to use.</p>
                <h5><b>Libraries and Tools</b></h5>
                <p>React and Bootstrap are the primary UI elements. Bootstrap is the react-bootstrap library that has compatibility with via react components. This allowed us to format our information in a more organized way; for example, we used Bootstrap to format this page. Other front-end libraries in use is react-toolbox for the grid cards and for the grid layout the react-bootstrap layout components. The front end is compiled from ES6 JSX files using webpack via Babel translator from jsx to a bundle.js file that contains the entirety of the page content and frontend libraries for deployment. Flask is the webserver that serves up the all of the frontend files. PostCSS is a dependency used by react-toolbox for its themes. The UI is supplemented with icons from react-icons which allows us to use material design icons without the hassle of installing and configuring them. The Moments CSS library is used to supplement the fonts on the details page and grid of cards.</p>
                <h5><b>Front-end Tool Configurations</b></h5>
                <p>Webpack is configured via the webpack.config.js file which specifies where the entrypoint of the application files is and where the compiled final distribution javascript file should be located. The current webpack file is configured to compile jsx via Babel to ES2015, and CSS via Postcss. The package.json file contains the dependency information for both the development and production front-end libraries as well as ways to build and run the application via npm. Run <code>npm install</code> to install dependencies. Run <code>npm build run</code> to compile the JSX files and run the application on the Docker webserver. The makefile contains ways to build/compile the application via: <code>make build</code></p>
                <h5><b>Front-end Structure</b></h5>
                <p>Starting from the root directory, www/ folder contains all the front-end code. Within this folder there is the index.html file which is the main html file that is served by the webserver. The components/ folder contains all of the JSX files that will compose into the application. Each .jsx file is a single component. The App.jsx file is the react component main entry point into the application. It is the file that will render all other components and is the root of the web application front-end logic; linking the .jsx to the index.html page. All other components are as stated. For example. RFGrid.jsx holds the grid component and NavBarAPI.jsx holds the navbar component for our application</p>
                <h5><b>Running Frontend</b></h5>
                <p>Running the front-end can be done after compilation/build of the application. Running the application is done by using the command <code>docker-compose up</code> which runs the application on a flask server locally at <b>localhost:80</b> or alternatively by running <code>make dev_build</code> will run a node server at <b>localhost:8080</b></p>
              </Panel>
              <Button id='back' onClick={() => this.setState({ open5: !this.state.open5 })}>
                Back-end <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open5}>
                <p>These tools set up the site so that it runs smoothly and doesn't break (hopefully).</p>
                <h5><b>Back-end Structure</b></h5>
                <p>Starting from the root of the application. The reddiful/ folder contains the api.py files that compose the back-end API of the application. The api.py file is the main entry point for the flask webserver. This file also contains all of the routes that will be used for the API backend call to retrieve data to be displayed in the front-end. In the app/ folder is the test.py and model.py files. Model unit tests which test the validity for the db data is in the test.py file. SQLAlchemy is used for mapping the database rows to a python object, this is defined in the model.py file.</p>
                <h5><b>Python and Flask</b></h5>
                <p>For setting up python and flask please see below for the Docker setup, as the Docker container freezes the dependencies for these. Python is used for the back-end logic. Flask is the webserver that is used to serve up the application. In order to run flask manually the following commands must be given from the root directory <code>export FLASK_APP=reddiful/api.py </code> and then the command <code>flask run </code> to actually run the application. Alternatively running <code> docker-compose up </code> will run the application via the Docker file. For the python back-end API specifications please see the Design section above or the apiary documentation at http://docs.reddiful.apiary.io/ . In addition the apiary documentation itself can be loaded into apiary using the apiary.apib file that is found in the repo.</p>
                <h5><b>Docker</b></h5>
                <p> Docker container is used to install the preliminary dependencies for the back-end. Please see above for installing the front-end dependencies via npm. The docker container is used to ensure that all back-end dependencies are the same for every environment. The Docker configuration for the installation of said dependencies is done in the Dockerfile file. This specifies the OS and other installation software. The docker-compose.yml file is the file that defines and initiates the webserver using flask.</p>
              </Panel>
            </Panel>
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
                <p>To set up an ec2 instance you navigate to the ec2 dashboard from the AWS console and click launch instance.  You will first have to select which machine image you would like the instance to be set to.  The machine image contains the configuration for the operating system as well as preinstalled software.  Our instance was configured with Amazon's 64 bit Linux AMI.  Next you have to select the instance type which we selected t2.micro for.  The t2.micro instance is a low cost general purpose instance type that has 1 vCPU, 1 GiB of memory, and a default 8 GiB Elastic Block Store volume associated with it. Amazon lists websites and applications as use cases for this type so it was a good fit for our goals. It is also free tier eligible which allowed us to host our application on AWS for free for up to a year.  At this point the instance is ready to launch.</p>
              </Panel>
              <Button id='accessibility' onClick={() => this.setState({ open8: !this.state.open8 })}>
                Accessibility <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open8}>
                <p>An elastic IPv4 IP was allocated and assigned to the instance and added to the DNS record on namecheap by navigating to Elastic IPs under Network & Security on the AWS console. To allow all group members access to the instance, public key information for each group member was added to the .ssh/authorized_keys file. The application is deployed on AWS simply by pulling the repository from github and running Docker with the settings we have in the repo.</p>
              </Panel>
            </Panel>
            <Panel id='database' header='Database' bsStyle='info'>
              <p>The Database is interfaced with SQLAlchemy. He</p>
              <Button id='setup2' onClick={() => this.setState({ open11: !this.state.open11 })}>
                Set-up <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open11}>
                <p>Stuff</p>
              </Panel>
              <Button id='implementation' onClick={() => this.setState({ open12: !this.state.open12 })}>
                Implementation <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open12}>
                <p>Stuff</p>
              </Panel>
              <Button id='issuessol' onClick={() => this.setState({ open13: !this.state.open13 })}>
                Issues and Solutions <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open13}>
                <p>Stuff</p>
              </Panel>
            </Panel>
            <Panel id='api' header='API' bsStyle='info'>
              <p>Placeholder</p>
            </Panel>
            <Panel id='diagrams' header='Diagrams & Other' bsStyle='info'>
              <Button id='uml' onClick={() => this.setState({ open9: !this.state.open9 })}>
                UML Diagram <FaAngleDown />
              </Button>
              <Panel collapsible expanded={this.state.open9}>
                <img src='/dist/images/UML.jpg' height='1573' width='306' />
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
                      <td>Application entrypoint, contains the page Routing logic</td>
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
                      <td>Defines the Grid that displays the Cards, takes a list of json object instances to display into Cards</td>
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
