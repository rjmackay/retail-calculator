import React, { Component } from 'react';
import './CalculatorForm.css';

class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItems: '',
      lastSubmission: {}
    };

    this.handleNumberOfItemsChange = this.handleNumberOfItemsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberOfItemsChange(event) {
    this.setState({numberOfItems: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      lastSubmission: {
        numberOfItems: this.state.numberOfItems
      }
    });
  }

  render() {
    return (
      <div className="CalculatorForm">
        <h2>Purchase Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number of items:
            <input type="text" name="numberOfItems" value={this.state.numberOfItems} onChange={this.handleNumberOfItemsChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>

        <h3>Results:</h3>
        <p>
          Number of items: {this.state.lastSubmission.numberOfItems}
        </p>
      </div>
    );
  }
}

export default CalculatorForm;
