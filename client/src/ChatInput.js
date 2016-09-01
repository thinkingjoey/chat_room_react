import React, {Component} from 'react';
import $ from 'jquery';
import socket from './socket';
import state from './state';

var messageStyle = {
  width: '100%'
}

class ChatInput extends Component{
  constructor(props, context) {
    super (props, context)
    this.state = state
  }


  componentDidMount(){
    $(document).on('stateChange', e => {
      this.setState = e.detail
    })
  }

  handleKeyDown (e) {
//if hit enter
    if (e.keyCode === 13) {
      socket.emit('chat', {
        msg: $("#chat-message").val(),
        user: this.state.user
      })
      $('#chat-message').val('')
    }
  }
  render(){
    return (
      <div className="ChatInput">
      <input id="chat-message"type="text" style={messageStyle} placeholder="enter to send" onKeyDown={this.handleKeyDown.bind(this)} />
      </div>
  );
  }
}

export default ChatInput
