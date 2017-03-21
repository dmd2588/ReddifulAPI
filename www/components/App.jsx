import React from 'react';
import ReactDOM from 'react-dom';
import NavBarAPI from './NavBarAPI.jsx';
import ModelPage from './ModelPage.jsx';

import Home from './Home.jsx';
import About from './About.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom'


var App = React.createClass({
        render: function() {
          return (
              <NavBarAPI/>
          )
        }
      });
export default App;
/*
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
*/

ReactDOM.render(   
    <Router>
       <div>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/modelPage" component={ModelPage}/>

        </div>
    </Router> ,
  document.getElementById('content')
);