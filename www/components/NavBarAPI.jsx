import React from 'react' //eslint-disable-line

import { Navbar, Nav, NavItem } from 'react-bootstrap'

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>Reddiful</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href='/home'>Home</NavItem>
      <NavItem href='/about'>About</NavItem>
      <NavItem href='/users'>Users</NavItem>
      <NavItem href='/subreddits'>Subreddit</NavItem>
      <NavItem href='/posts'>Posts</NavItem>
      <NavItem href='/comments'>Comments</NavItem>

    </Nav>
  </Navbar>

    )

var NavBarAPI = React.createClass({
  render: function () {
    return (
            navbarInstance
    )
  }
})

export default NavBarAPI
