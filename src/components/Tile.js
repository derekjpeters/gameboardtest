// Tile.js: Represents an individual tile in the grid
import React from 'react';
import './Tile.css'; // Import styles for the tile

function Tile({ value, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      {/* Display the value of the tile */}
      {value}
    </div>
  );
}

export default Tile;
