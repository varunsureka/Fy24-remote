import React, { useEffect, useState } from 'react';

const config = {
    red: {
      backgroundColor: 'red',
      duration: 2000,
      next: 'yellow',
    },
    yellow: {
      backgroundColor: 'yellow',
      duration: 500,
      next: 'green',
    },
    green: {
      backgroundColor: 'green',
      duration: 1000,
      next: 'red',
    },
  };

function Light({ backgroundColor }) {
  return (
    <div className="traffic-light" data-testid={`${backgroundColor}-light`}
      style={{ backgroundColor }}
    />
  );
}

export default function TrafficLight() {
  const [currentColor, setCurrentColor] =
    useState('green');

  useEffect(() => {
    const { duration, next } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="traffic-light-container" data-testid="traffic-light" >
      {Object.keys(config).map((color) => (
        <Light
          key={color}
          backgroundColor={
            color === currentColor
              ? config[color].backgroundColor
              : undefined
          }
        />
      ))}
    </div>
  );
}
