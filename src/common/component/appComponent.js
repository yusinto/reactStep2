import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                Hello world in React! The time now is { (new Date()).toLocaleString() }
            </div>);
    }
}