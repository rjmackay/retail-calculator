import React, { Component } from 'react';
import './CalculatorForm.css';

class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItems: '',
      pricePerItem: '',
      lastSubmission: {}
    };

    this.handleNumberOfItemsChange = this.handleNumberOfItemsChange.bind(this);
    this.handlePricePerItemChange = this.handlePricePerItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberOfItemsChange(event) {
    this.setState({numberOfItems: event.target.value});
  }

  handlePricePerItemChange(event) {
    this.setState({pricePerItem: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      lastSubmission: {
        numberOfItems: this.state.numberOfItems,
        pricePerItem: this.state.pricePerItem
      }
    });
  }

  render() {
    return (
      <div className="CalculatorForm">
        <h2>Purchase Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Number of items:
              <input type="text" name="numberOfItems" value={this.state.numberOfItems} onChange={this.handleNumberOfItemsChange} />
            </label>
          </div>
          <div>
            <label>
              Price per item:
              <input type="text" name="pricePerItem" value={this.state.pricePerItem} onChange={this.handlePricePerItemChange} />
            </label>
          </div>
          <input type="submit" value="Submit"/>
        </form>

        <h3>Results:</h3>
        <p>
          Number of items: {this.state.lastSubmission.numberOfItems}<br />
          Price per item: ${this.state.lastSubmission.pricePerItem}
        </p>
      </div>
    );
  }
}

export default CalculatorForm;
