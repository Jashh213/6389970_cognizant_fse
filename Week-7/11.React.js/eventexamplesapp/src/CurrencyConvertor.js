import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      result: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  convertToEuro = () => {
    const rupees = parseFloat(this.state.rupees);
    if (!isNaN(rupees)) {
      const euro = (rupees * 0.011).toFixed(2);
      alert(`Converted Euro: €${euro}`);
      this.setState({ result: `Converted Euro: €${euro}` });
    }
  };

  convertToRupees = () => {
    const euro = parseFloat(this.state.rupees);
    if (!isNaN(euro)) {
      const rupees = (euro / 0.011).toFixed(2);
      alert(`Converted Rupees: ₹${rupees}`);
      this.setState({ result: `Converted Rupees: ₹${rupees}` });
    }
  };

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>

        <label>Enter Rupees:</label>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
          style={{ marginLeft: '10px' }}
        />
        <br /><br />

        <button onClick={this.convertToEuro}>Convert to Euro</button>
        <button onClick={this.convertToRupees} style={{ marginLeft: '10px' }}>
          Convert to Rupees
        </button>

        <p style={{ color: 'blue', fontWeight: 'bold' }}>{this.state.result}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;