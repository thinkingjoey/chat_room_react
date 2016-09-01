import React, { Component } from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';



class ChatNav extends Component {
  handleToggleUsers() {
    document.dispatchEvent(new Event('toggleUsers'))
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
        <Navbar.Brand> React Chat
        </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
        <NavItem><Link to="/">Chat</Link></NavItem>
        <NavItem><Link to="/About">About</Link></NavItem>

        <NavItem onClick={this.handleToggleUsers}> Toggle Users</NavItem>
        </Nav>
      </Navbar>


    )
  }
}

export default ChatNav
