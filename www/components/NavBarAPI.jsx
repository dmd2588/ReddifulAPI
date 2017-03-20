import React from 'react';

import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

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
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
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
   

