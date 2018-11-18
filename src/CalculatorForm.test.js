import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CalculatorForm, { actions } from './CalculatorForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('saves numberOfItems to state and outputs it', () => {
  const submitHandler = jest.fn();
  const component = renderer.create(
    <CalculatorForm onSubmit={submitHandler} />,
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

  // Set state code
  let stateInput = component.root.findByProps({name : 'stateCode'});
  stateInput.props.onChange({ target: { value: 'UT' } });

  // Submit the form
  let submit = component.root.findByType('form');
  submit.props.onSubmit({
    preventDefault : () => {}
  });

  expect(submitHandler.mock.calls.length).toBe(1);
  expect(submitHandler.mock.calls[0]).toEqual([{
    numberOfItems: "100",
    pricePerItem: "200",
    stateCode: 'UT'
  }]);

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('actions', () => {
  it('setNumberOfItems', () => {
    expect(actions.setNumberOfItems(100)
    ).toEqual({
      numberOfItems: 100
    })
  });
  it('setPricePerItem', () => {
    expect(actions.setPricePerItem(100)
    ).toEqual({
      pricePerItem: 100
    })
  });
});
