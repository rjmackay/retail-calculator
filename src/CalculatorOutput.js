import React, { Component } from 'react';

class CalculatorOutput extends Component {
  render() {
    let subTotal = getSubTotal(this.props);
    let taxRate = getTaxRate(this.props.stateCode);
    let tax = getTax(subTotal, taxRate);
    let total = getTotal(subTotal, tax);
    return (
      <div className="CalculatorOutput">
        <h3>Results:</h3>
        <p>
          Number of items: {this.props.numberOfItems}<br />
          Price per item: ${this.props.pricePerItem}
        </p>
        <p>
          Subtotal: ${subTotal ? subTotal : ''}<br />
          Tax: ${tax ? tax : ''} ({taxRate}%)<br />
          Total: ${total ? total : ''}<br />
        </p>
      </div>
    );
  }
}

export const getSubTotal = (submission) => {
  return submission.numberOfItems * submission.pricePerItem;
};
export const getTotal = (subTotal, tax) => {
  return subTotal + tax;
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

export const getTax = (subtotal, taxRate) => {
  return (subtotal / 100) * taxRate;
}

export default CalculatorOutput;
