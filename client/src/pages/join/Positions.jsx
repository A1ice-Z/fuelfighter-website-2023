import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Positions = ({ positions }) => {
  const [selectedPosition, setSelectedPosition] = useState(positions[0]);
  const [selectedRow, setSelectedRow] = useState('Board');

  const handleSelectPosition = (position) => {
    setSelectedPosition(position);
  };

  const handleSelectRow = (event) => {
    setSelectedRow(event.target.value);
  };

  const firstRowPositions = positions.slice(0, 5);
  const secondRowPositions = positions.slice(5);

  return (
    <div className="container">
      <div className="positions-container">
        <div className="row-selector">
          <label htmlFor="row-select"><h2>Positions</h2></label>
          <select id="row-select" onChange={handleSelectRow}>
            <option value="Board">Board</option>
            <option value="Group Leader">Group Leader</option>
          </select>
        </div>
        {selectedRow === 'Board' && (
          <div className="positions-row">
            {firstRowPositions.map((position) => (
              <span
                key={position.title}
                className={`position-item ${
                  position === selectedPosition ? 'selected' : ''
                }`}
                onClick={() => handleSelectPosition(position)}
              >
                {position.title}
              </span>
            ))}
          </div>
        )}
        {selectedRow === 'Group Leader' && (
          <div className="positions-row">
            {secondRowPositions.map((position) => (
              <span
                key={position.title}
                className={`position-item ${
                  position === selectedPosition ? 'selected' : ''
                }`}
                onClick={() => handleSelectPosition(position)}
              >
                {position.title}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="selected-position">
        <h3>{selectedPosition.title}</h3>
        {/* <img src={selectedPosition.image} alt={selectedPosition.title} /> */}
        <p>{selectedPosition.description}</p>
      </div>
    </div>
  );
};

export default Positions;