import React from 'react';
import ReactDOM from 'react-dom';
import NavBarAPI from './NavBarAPI.jsx';

var Greeting = React.createClass({
        render: function() {
          return (
              <div>
            <NavBarAPI/>  
            <p>Hello, There</p>
            </div>
          )
        }
      });

ReactDOM.render(
   <Greeting/>,
    document.getElementById('content')
);