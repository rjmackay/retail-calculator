import React, { Component } from 'react';

class CalculatorOutput extends Component {
  render() {
    let total = getTotal(this.props);
    return (
      <div className="CalculatorOutput">
        <h3>Results:</h3>
        <p>
          Number of items: {this.props.numberOfItems}<br />
          Price per item: ${this.props.pricePerItem}
        </p>
        <p>
          Total: ${total ? total : ''}
        </p>
      </div>
    );
  }
}

export const getTotal = (submission) => {
  return submission.numberOfItems * submission.pricePerItem;
};

export default CalculatorOutput;
