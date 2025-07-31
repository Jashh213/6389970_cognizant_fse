import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
    alert("Hello member");
    alert("This is a static message");
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayWelcome = () => {
    alert("Welcome");
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>{this.state.count}</h1>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: '10px' }}>Decrement</button>
        <br /><br />

        <button onClick={this.sayWelcome}>Say welcome</button>
        <br /><br />

        <button onClick={this.handleClick}>Click on me</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;