// App.js: Main component that holds the game
import React from 'react';
import './App.css'; // Import app-wide styles
import GameBoard from './components/GameBoard'; // Import the GameBoard component

// Main App Component
function App() {
  return (
    <div className="App">
      {/* Title of the game */}
      <h1>Tile Puzzle Game</h1>
      {/* Render the GameBoard component and pass gridSize as a prop */}
      <GameBoard gridSize={3} />
    </div>
  );
}

export default App;
