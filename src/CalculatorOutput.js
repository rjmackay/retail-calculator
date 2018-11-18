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

const stateCodeMap = {
  UT: 6.85,
  TX: 6.25,
  CA: 8.25,
  NV: 8.0,
  AL: 4.0
}

export const getTaxRate = (stateCode) => {
  return stateCodeMap[stateCode];
}

export default CalculatorOutput;
