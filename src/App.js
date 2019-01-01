import React, { Component } from 'react';
import './App.css';
import MessageList from './messages/message-list';

class App extends Component {

    render() {
        const headerStyle = {
            color: '#ff0000',
            textDecoration: 'underline'
        }
        return (
            <div>
                <h2 style={headerStyle}>Hello World Again!</h2>
                <MessageList />
            </div>
        )
    }

}

export default App;