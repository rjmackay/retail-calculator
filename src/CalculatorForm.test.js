import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CalculatorForm from './CalculatorForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('saves numberOfItems to state and outputs it', () => {
  const component = renderer.create(
    <CalculatorForm />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger state changes
  // Set number of items
  let itemInput = component.root.findByProps({name : 'numberOfItems'});
  itemInput.props.onChange({ target: { value: '100' } });

  // Set price per item
  let priceInput = component.root.findByProps({name : 'pricePerItem'});
  priceInput.props.onChange({ target: { value: '200' } });

  // Submit the form
  let submit = component.root.findByType('form');
  submit.props.onSubmit({
  	preventDefault : () => {}
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});