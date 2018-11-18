import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CalculatorOutput, { getTotal, getTaxRate } from './CalculatorOutput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorOutput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('', () => {
  const component = renderer.create(
    <CalculatorOutput numberOfItems="100" pricePerItem="200" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('getTotal calculates total', () => {
  expect(getTotal({
    numberOfItems: 100,
    pricePerItem: 300
  })).toEqual(30000);
});

it('getTaxRate returns correct rates', () => {
  expect(getTaxRate('UT')).toEqual(6.85);
  expect(getTaxRate('TX')).toEqual(6.25);
  expect(getTaxRate('CA')).toEqual(8.25);
  expect(getTaxRate('NV')).toEqual(8.0);
  expect(getTaxRate('AL')).toEqual(4.0);
});
