import React from 'react'
import ReactDOM from 'react-dom'
import NavBarAPI from './NavBarAPI.jsx'
import Users from './Users.jsx'
import UserDetail from './UserDetail.jsx'
import About from './About.jsx'
import Subreddits from './Subreddits.jsx'
import SubredditDetails from './SubredditDetails.jsx'
import Posts from './Posts.jsx'
import PostDetails from './PostDetails.jsx'
import Comments from './Comments.jsx'
import CommentDetails from './CommentDetails.jsx'
import Home from './Home.jsx'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { deepOrange500, deepOrange700, grey400 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    primary2Color: deepOrange700,
    primary3Color: grey400
  }
})

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />

        <Route exact path='/users' component={Users} />
        <Route path='/users/detail/:user_id' component={UserDetail} />

        <Route exact path='/subreddits' component={Subreddits} />
        <Route path='/subreddits/detail/:subreddit_id' component={SubredditDetails} />

        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/detail/:post_id' component={PostDetails} />

        <Route exact path='/comments' component={Comments} />
        <Route path='/comments/detail/:comment_id' component={CommentDetails} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('content')
)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <NavBarAPI />
  </MuiThemeProvider>,
  document.getElementById('nav')
)
