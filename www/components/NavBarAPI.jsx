import React from 'react';

import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

//Change these into imports
//var Navbar = ReactBootstrap.Navbar,
//Nav = ReactBootstrap.Nav,
//NavItem = ReactBootstrap.NavItem,
//DropdownButton = ReactBootstrap.DropdownButton,
//MenuItem = ReactBootstrap.MenuItem;

const navbarInstance = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Reddiful</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link to="/home">Home</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/users">Users</Link></NavItem>
          <NavItem><Link to="/subreddits">Subreddits</Link></NavItem>
          <NavItem><Link to="/posts">Posts</Link></NavItem>
          <NavItem><Link to="/comments">Comments</Link></NavItem>

        </Nav>
      </Navbar>
      
    );

var NavBarAPI = React.createClass({
        render: function() {
          return (
            navbarInstance
          )
        }
});

export default NavBarAPI;
   

