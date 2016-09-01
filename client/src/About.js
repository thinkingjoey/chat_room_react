import React, { Component } from 'react';
import ChatNav from './ChatNav'

class About extends Component {
  render () {
    return (
      <div className="About">
        <ChatNav />
        <p> This is the About Page </p>
        <p> This is a chat room </p>
      </div>
    )
  }
}

export default About
