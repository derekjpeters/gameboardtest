Tile Puzzle Game Documentation
==============================

Overview
--------

The **Tile Puzzle Game** is a fun and interactive project built using React. Players rearrange shuffled tiles on a grid to restore the original sequential order. This game helps students learn core React concepts, including components, props, state management, and event handling, in an engaging and practical way.

* * * * *

Features
--------

-   **Dynamic Grid**: The game grid adjusts based on the number of tiles (default: 3x3).
-   **Interactive Gameplay**: Players can swap tiles to arrange them in the correct order.
-   **Win Detection**: The game recognizes when the puzzle is solved and displays a congratulatory message.
-   **React Fundamentals**: Includes usage of `useState`, `useEffect`, and props to manage the game logic and UI.

* * * * *

Learning Objectives
-------------------

By completing this project, students will:

-   Understand React components and how to compose them.
-   Manage state using the `useState` hook.
-   Use the `useEffect` hook for side effects like initialization.
-   Implement event handlers to manage user interactions.
-   Style components using modular CSS.

* * * * *

File Structure
--------------

scss

Copy code

`tile-puzzle/
├── src/
│   ├── components/
│   │   ├── GameBoard.js      // Manages the puzzle grid and game logic
│   │   ├── Tile.js           // Represents an individual tile
│   ├── App.js                // Main entry point for the app
│   ├── App.css               // Global styles for the app
│   ├── index.js              // Entry point for rendering the app
│   ├── index.css             // Global reset and basic styles`

* * * * *

How to Play
-----------

1.  **Start the Game**: The grid of tiles will be shuffled automatically when the game loads.
2.  **Rearrange Tiles**: Click a tile to swap it with the next tile in the sequence.
3.  **Win the Game**: Arrange all tiles in sequential order (e.g., 1, 2, 3, ...).
4.  **Victory Message**: Once solved, a congratulatory message will appear.

* * * * *

Setup and Installation
----------------------

1.  Clone the repository:

    bash

    Copy code

    `git clone https://github.com/your-username/tile-puzzle.git`

2.  Navigate to the project directory:

    bash

    Copy code

    `cd tile-puzzle`

3.  Install dependencies:

    bash

    Copy code

    `npm install`

4.  Start the development server:

    bash

    Copy code

    `npm start`

The app will run on `http://localhost:3000`.

* * * * *

Key Code Highlights
-------------------

### `GameBoard.js`

-   **Tile Shuffling**: Randomizes the tile positions using the Fisher-Yates algorithm.
-   **State Management**: Handles the tile positions and win detection.
-   **Win Check Logic**:

    jsx

    Copy code

    `const checkIfSolved = (tiles) => {
      setIsSolved(tiles.every((tile, index) => tile === index + 1));
    };`

### `Tile.js`

-   A simple component representing individual tiles with an `onClick` event handler.

* * * * *

Possible Enhancements
---------------------

-   **Adjacency Rules**: Restrict swaps to adjacent tiles only (up, down, left, right).
-   **Empty Space**: Add an empty space for realistic sliding puzzle mechanics.
-   **Timer and Score**: Track time taken and the number of moves for added difficulty.
-   **Responsive Grid**: Dynamically adjust grid size based on screen size.

* * * * *

Styling
-------

-   **Global Styles**: Applied in `App.css` and `index.css` for consistent look and feel.
-   **Modular Styles**: Separate CSS files for `GameBoard` and `Tile` to keep styles scoped and organized.

* * * * *

Concepts Covered
----------------

This project reinforces:

1.  **React Components**: Modular building blocks for UI.
2.  **Props**: Passing data and event handlers between components.
3.  **State**: Managing dynamic data within a component.
4.  **Event Handling**: Responding to user interactions like clicks.
5.  **CSS**: Modular and global styles for clean and responsive design.

* * * * *

Troubleshooting
---------------

### Common Issues

1.  **Tiles not swapping correctly**:
    -   Ensure the `swapTiles` function is implemented correctly.
2.  **Win condition not detected**:
    -   Check the `checkIfSolved` function logic.

### Debugging Tips

-   Use `console.log` to debug state changes and interactions.
-   Ensure all components are correctly imported and paths are accurate.

* * * * *

Next Steps
----------

-   Experiment with grid sizes (e.g., 4x4 or 5x5).
-   Add additional gameplay features such as a shuffle button or leaderboard.
-   Explore animations for smoother tile transitions.

* * * * *

Acknowledgments
---------------

This game was developed as an educational project to introduce students to React concepts in a fun and interactive way.

Feel free to extend and adapt this project to your own needs! 🎉

* * * * *

License
-------

This project is licensed under the **MIT License**.