import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CalculatorOutput, { getTotal } from './CalculatorOutput';

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
