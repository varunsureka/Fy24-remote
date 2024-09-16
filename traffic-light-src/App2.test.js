import React, { useEffect, useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import TrafficLight from './components/TrafficLight';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('TrafficLight transitions', () => {
  it('transitions from red to yelow light as per the durations', () => {
    render(<TrafficLight />);
    
    act(() => {
      jest.advanceTimersByTime(1000); // Advance time by 1 second
    });

    act(() => {
      jest.advanceTimersByTime(3000); // Advance time by 2 seconds
    });
    const yellowLight = screen.getByTestId('yellow-light');
    expect(yellowLight).toBeInTheDocument();
    expect(yellowLight).toHaveStyle('background-color: yellow');
  });
});