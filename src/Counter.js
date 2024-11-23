
import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = {
        count : 0,
    };
}

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
    return (
        <div>
        <h1>Counter App</h1>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
    );
    }
}

export default Counter;
