import { useEffect, useState } from 'react';

const config = {
    red: {
      backgroundColor: 'red',
    }
  };

function Light({ backgroundColor }) {
  return (
    <div className="traffic-light"
      data-testid="traffic-light"
      style={{ backgroundColor }}
    />
  );
}

export default function TrafficLightQues() {
  return (
    <div className="traffic-light-container" data-testid="traffic-light">
        <Light backgroundColor={config.red.backgroundColor}/>
    </div>
  );
}
