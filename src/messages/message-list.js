import React, { Component } from 'react';
import MessageView from './message-view';

export default class MessageList extends Component {
  messageViews
  state
  state = {
    messages: [
      {
        from: 'John',
        message: 'The event will start next week',
        status: 'unread'
      },
      {
        from: 'Martha',
        message: 'I will be traveling soon',
        status: 'read'
      },
      {
        from: 'Jacob',
        message: 'Talk later. Have a great day!',
        status: 'read'
      }
    ]
  }

  render() {

    console.log(this.state.messages[0].from)

    const oo = { q: 3, a: 4, z: 1 }
    const { q, z } = oo
    console.log('fdfsf ' + q + z)

    this.messageViews = this.state.messages.map(
      function (bighe, index) {
        console.log("bighe " + bighe.from + " " + index)
        return (
          <MessageView key={index} message={bighe} />
        )
      })
    return (
      <div>
        <h1>List of Messages</h1>
        {this.messageViews}
      </div>
    )
  }
}