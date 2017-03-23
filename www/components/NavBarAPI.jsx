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

const navbarInstance = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Reddiful</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/home">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/users">Users</NavItem>
          <NavItem href="/subreddits">Subreddit</NavItem>
          <NavItem href="/posts">Posts</NavItem>
          <NavItem href="/comments">Comments</NavItem>

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
