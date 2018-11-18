import React, { Component } from 'react';
import './App.css';
import CalculatorForm from './CalculatorForm';
import CalculatorOutput from './CalculatorOutput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(submission) {
    this.setState(submission);
  }

  render() {
    return (
      <div className="App">
        <CalculatorForm onSubmit={this.handleSubmit} />
        <CalculatorOutput numberOfItems={this.state.numberOfItems} pricePerItem={this.state.pricePerItem} />
      </div>
    );
  }
}

export default App;
