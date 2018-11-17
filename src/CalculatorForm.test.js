import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorForm from './CalculatorForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
