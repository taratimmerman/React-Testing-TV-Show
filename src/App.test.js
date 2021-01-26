import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import strangerTestData from './api/strangerTestData';
import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

test('App renders without errors', () => {
    render(<App/>)
    const selectASeason = screen.getByText(/select a season/i);
    userEvent.click(selectASeason);
    expect(selectASeason).toBeInTheDocument(); 
});

test('Data renders successfully', () => {
    mockFetchShow.mockResolvedValueOnce({ data: strangerTestData });
    render(<App />);
});

test('App renders even without data', () => {
    mockFetchShow.mockResolvedValueOnce({ data: null });
    render(<App />);
  
    const isLoading = screen.queryByText(/fetching data.../i);
    expect(isLoading).toBeInTheDocument(); 
});