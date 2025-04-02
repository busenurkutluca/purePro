// GraphPage.js
import React from 'react';

function GraphPage() {
  return (
    <div className="graph-content">
      <h1
        className="graph-baslik"
        style={{
          fontSize: '30px',
          color: 'gray',
          fontFamily: "'Montserrat', sans-serif",
          backgroundColor: 'white',
          padding: '8px 16px',
          display: 'inline-block',
          border: '3px solid gray',
          borderRadius: '8px',
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
        }}
      >
        AIR POLLUTION GRAPH
      </h1>
    </div>
  );
}

export default GraphPage;