import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

it('renders without crashing', ()=> {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2+2).toBe(4);
  });
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2+2).toBe(5);
  });
});