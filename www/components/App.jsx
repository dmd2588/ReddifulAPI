import React from 'react';
import ReactDOM from 'react-dom';
import NavBarAPI from './NavBarAPI.jsx';
import Users from './Users.jsx';
import UserDetail from './UserDetail.jsx';
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

ReactDOM.render(
    <Router>
       <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>

        <Route exact path="/users" component={Users}/>
        <Route path="/users/detail/:user_id" component={UserDetail}/>
        
        <Route exact path="/subreddits" component={Subreddits}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/comments" component={Comments}/>
      </div>
    </Router>,
    document.getElementById('content')
);

ReactDOM.render(
    <NavBarAPI/>,
    document.getElementById('nav')
);
