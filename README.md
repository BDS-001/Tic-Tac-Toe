# Browser Tic-Tac-Toe

A classic Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS that runs directly in your browser.

## Features

- Play Tic-Tac-Toe against another player
- Customizable player names
- Score tracking
- Responsive design
- Clean, modern UI with a pleasing color scheme
- Game state management (start, reset, victory detection)

## Project Structure

```
tic-tac-toe/
│
├── index.html         # Main HTML structure
├── styles.css         # CSS styling
└── tic_tac_toe.js     # JavaScript game logic
```

## Technical Implementation

This project implements the Tic-Tac-Toe game using module patterns and factory functions to maintain clean, encapsulated code with minimal global scope pollution.

### Key Components:

1. **Gameboard Module**: Handles the game state and core logic
   - Stores the board as an array
   - Contains functions to modify the board
   - Includes victory and tie detection algorithms

2. **Player Factory**: Creates player objects
   - Maintains player name, game piece, and score

3. **Game Module**: Controls game flow and UI interaction
   - Manages player turns
   - Updates the DOM
   - Handles user input and events

## Code Organization

The code follows the module pattern using Immediately Invoked Function Expressions (IIFE) for singletons like the gameboard and game controller, and factory functions for objects that might have multiple instances like players.

## How to Play

1. Open `index.html` in your browser
2. Enter custom names for Player 1 and Player 2 (or keep the defaults)
3. Click "Submit" to begin
4. Click "START" to start a new round
5. Players take turns clicking on empty squares to place their marks (X or O)
6. The game automatically detects wins or ties
7. Use "RESET" to clear scores and start over

## Learning Outcomes

This project demonstrates:
- JavaScript module pattern and factory functions
- DOM manipulation
- Event handling
- Game state management
- UI/UX design principles

## Credits

Created based on The Odin Project's curriculum. Built with vanilla JavaScript, HTML, and CSS.
