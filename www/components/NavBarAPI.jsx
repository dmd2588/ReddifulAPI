import React from 'react' //eslint-disable-line

import { Navbar, Nav, NavItem } from 'react-bootstrap'

const navbarInstance = (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>Reddiful</a>
      </Navbar.Brand>
      <Navbar.Toggle />

    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href='/home'>Home</NavItem>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/users'>Users</NavItem>
        <NavItem href='/subreddits'>Subreddit</NavItem>
        <NavItem href='/posts'>Posts</NavItem>
        <NavItem href='/comments'>Comments</NavItem>

      </Nav>
    </Navbar.Collapse>

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
