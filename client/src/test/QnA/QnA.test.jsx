/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QnA from '../components/QnA/QnA';
import IdContext from '../components/Context';
// it('render QnA without crashing', () => {
//   const { getByText } = render(<QnA/>);
//   expect(getByText('Questions')).toBeInTheDocument();
// });

// it('renders QnA without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<QnA />, div);
// });

it('render QnA component', () => {
  const productId = jest.fn();
  render(
    <IdContext.Provider value={{ productId }}>
      <QnA />
    </IdContext.Provider>,
  );
  const welcomeText = screen.getByText('Questions and Answers');
  expect(welcomeText).toHaveTextContent('Questions and Answers');
});
