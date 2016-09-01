import React, {Component} from 'react';
import state from './state'
import $ from 'jquery'

class ChatLog extends Component{
  constructor (props, context) {
    super(props, context)
    this.state = state
  }

    //Don't need to say function componentDidMount(){}
    //e means event
    componentDidMount(){
      $(document).on('stateChange', e => {
        //react built in function
        this.setState(e.detail)

      })

    }

  render(){
    var chatLogStyle = {
      padding: '15px',
      border: '1px solid lightgrey',
      height: window.innerHeight * .7,
      fontSize: '18px'
    }


    var chatDivs = this.state.chats.map(chat => {
      var userStyle = {
        color: this.state.colors[chat.user]
      }

      return (
        <div key={chat.id}>

          <span style={userStyle}>{chat.user} :</span>
          <span>{chat.msg}</span>
        </div>
      )
    })
    return (
      <div className="ChatLog" style={chatLogStyle}>
        {chatDivs}
      </div>

    )
  }
}

export default ChatLog
