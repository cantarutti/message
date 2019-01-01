import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = {
    firstName: "Jane",
    lastName: "Doe"
}
const element = <p>Hello, {user.firstName} {user.lastName}
                <App />
                </p>

ReactDOM.render(element, document.getElementById('root'));