import React from 'react';
import ReactDOM from 'react-dom';
import NavBarAPI from './NavBarAPI.jsx';
import Users from './Users.jsx';
import About from './About.jsx';
import Subreddits from './Subreddits.jsx';
import Posts from './Posts.jsx';
import Comments from './Comments.jsx';
import Home from './Home.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
  Redirect
} from 'react-router-dom'


var App = React.createClass({
        render: function() {
          return (
              <NavBarAPI/>
          )
        }
      });
export default App;

ReactDOM.render(   
    <Router>
       <div>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <Route path="/subreddits" component={Subreddits}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/comments" component={Comments}/>
        <Route path="/home" component={Home}/>
        <Redirect from="/" to="/home"/>
        </div>
    </Router> ,
  document.getElementById('content')
);