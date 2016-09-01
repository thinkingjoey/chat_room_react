import socket from './socket'
import $ from 'jquery'


var state={
  chats: [],
  users: [],
  colors: {},
  user: 'user' + Math.floor(Math.random()*10000),
  showUsers: true
}

socket.on('chat', chat => {
  //add chat to state
  state.chats.push(chat)

  //add user to users if it's a new user
  //-1 means this is not in the array (something new)
  if (state.users.indexOf(chat.user) === -1) {
    state.users.push(chat.user)
    state.colors[chat.user] = randomHexColor();
  }
  dispatch()
})

//listen for toggle users
$(document).on('toggleUsers', e => {
  state.showUsers = !state.showUsers
  dispatch()
})

function randomHexColor () {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

//emit the statechange event
function dispatch(){
  //buint in javascript
  var event = new CustomEvent('stateChange', {
    detail: state
  })
  document.dispatchEvent(event)

}


export default state
