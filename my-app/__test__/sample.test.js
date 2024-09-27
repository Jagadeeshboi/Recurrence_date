import { render, screen } from '@testing-library/react';
import React from 'react';
import DatePicker from '../components/Datepicker';
import '@testing-library/jest-dom';

test('renders DatePicker component', () => {
  render(<DatePicker />);
  const contain = screen.getByText(/Select Date/i);
  expect(contain).toBeInTheDocument();
});
