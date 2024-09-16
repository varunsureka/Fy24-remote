import React, { useEffect, useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import TrafficLight from './components/TrafficLight';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('TrafficLight initial load', () => {

  it('renders three traffic light components', () => {
    render(<TrafficLight />);
    const trafficLights = document.querySelectorAll('.traffic-light');
    expect(trafficLights.length).toBe(3);
  });

  it('initially displays the green light', () => {
    render(<TrafficLight />);
    const greenLight = screen.getByTestId('green-light');
    expect(greenLight).toBeInTheDocument();
    expect(greenLight).toHaveStyle('background-color: green');
  });

  it('transitions to red lights as per the duration', () => {
    render(<TrafficLight />);
    
    act(() => {
      jest.advanceTimersByTime(1000); // Advance time by 1 second
    });
    const redLight = screen.getByTestId('red-light');
    expect(redLight).toBeInTheDocument();
    expect(redLight).toHaveStyle('background-color: red');
  });
});