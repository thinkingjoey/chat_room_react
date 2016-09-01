import React, {Component} from 'react';
import ChatInput from './ChatInput'
import ChatLog from './ChatLog'
import state from './state'
import $ from 'jquery'

class ChatBox extends Component{
  constructor(props, context){
    super (props, context)
    this.state = state
  }


  componentDidMount(){
    $(document).on('stateChange', e => {
      this.setState(e.detail)
    })
  }

  render () {
       if (this.state.showUsers)
           var width = "ChatBox col-md-9"
       else
           width = "ChatBox col-md-12"
       return (
       <div className={width} >
           <ChatLog />
           <ChatInput />
       </div>
       );
     }
   }

export default ChatBox
