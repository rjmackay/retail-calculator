import React, { Component } from 'react';
import './CalculatorForm.css';

export const actions = {
  init() {
    return {
      numberOfItems: '',
      pricePerItem: ''
    };
  },
  setNumberOfItems(numberOfItems) {
    return { numberOfItems };
  },
  setPricePerItem(pricePerItem) {
    return { pricePerItem };
  }
};

class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = actions.init();

    this.handleNumberOfItemsChange = this.handleNumberOfItemsChange.bind(this);
    this.handlePricePerItemChange = this.handlePricePerItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberOfItemsChange(event) {
    this.setState(actions.setNumberOfItems(event.target.value));
  }

  handlePricePerItemChange(event) {
    this.setState(actions.setPricePerItem(event.target.value));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
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
      </div>
    );
  }
}

export default CalculatorForm;
