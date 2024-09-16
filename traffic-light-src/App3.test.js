import React, { useEffect, useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import TrafficLight from './components/TrafficLight';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('TrafficLight transitions', () => {
  it('transitions from yellow to green light as per the durations', () => {
    render(<TrafficLight />);
    
    act(() => {
      jest.advanceTimersByTime(1000); // Advance time by 1 second
    });

    act(() => {
      jest.advanceTimersByTime(3000); // Advance time by 2 seconds
    });

    act(() => {
      jest.advanceTimersByTime(3500); // Advance time by 0.5 seconds
    });
    const greenLight = screen.getByTestId('green-light');
    expect(greenLight).toBeInTheDocument();
    expect(greenLight).toHaveStyle('background-color: green');
  });
});