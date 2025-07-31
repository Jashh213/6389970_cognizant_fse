import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let message;
    let button;
    let signupPrompt;

    if (this.state.isLoggedIn) {
      message = <h2>Welcome User</h2>;
      button = <button onClick={this.handleLogout}>Logout</button>;
      signupPrompt = null;
    } else {
      message = <h2>Welcome Guest</h2>;
      signupPrompt = <p style={{ color: 'red' }}>Please sign up to book your tickets.</p>;
      button = <button onClick={this.handleLogin}>Login</button>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Ticket Booking App</h1>
        {message}
        {signupPrompt}
        {button}

        <br /><br />

        {this.state.isLoggedIn ? (
          <p>You can now book tickets</p>
        ) : (
          <div>
            <h3>Flight Details</h3>
            <ul>
              <li>Flight: AI202</li>
              <li>From: Hyderabad</li>
              <li>To: Delhi</li>
              <li>Departure: 10:00 AM</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;