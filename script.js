const gameBoard = document.getElementById('game-board');
const gridSize = 4;




let playerPosition = { x: 0, y: 0 };

// Create the grid
for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${x}-${y}`;
        gameBoard.appendChild(cell);
    }
}


// Place the player
function updatePlayerPosition() {
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('player'));
    //document.querySelectorAll('.cell').forEach(cell => cell.removeChild(insertPlayer));
    var playerCell = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
    playerCell.classList.add('player');    
};


    

updatePlayerPosition();

// Handle player movement
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (playerPosition.y > 0) playerPosition.y--;
            break;
        case 'ArrowDown':
            if (playerPosition.y < gridSize - 1) playerPosition.y++;
            break;
        case 'ArrowLeft':
            if (playerPosition.x > 0) playerPosition.x--;
            break;
        case 'ArrowRight':
            if (playerPosition.x < gridSize - 1) playerPosition.x++;
            break;
    }
    updatePlayerPosition();
});
