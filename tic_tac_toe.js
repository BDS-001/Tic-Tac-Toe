//gameBoard module
const gameBoard = (function() {
    const board = ['','','','','','','','','']

    const changeBoard = function(index, val) {
        if (board[index] === '') {
            board[index] = val
        }
    }

    return {board, changeBoard}
})();

//create player factory
function createPlayer(gamePiece) {

    return {
        gamePiece
    }
}

// game module
const game = (function () {
    const players = [createPlayer('X'), createPlayer('O')]
    let currentPlayer = 0
    
    //cacheDom
    const boardSections = document.querySelectorAll('.game-square')

    //bind events
    boardSections.forEach(function(boardSection) {
        boardSection.addEventListener('click', placeGamePiece)
    })

    _render()

    //render function
    function _render() {
        for (let index = 0; index < gameBoard.board.length; index++) {
            boardSections[index].innerHTML = gameBoard.board[index]
        }
    }

    function placeGamePiece(event) {
        if (event.target.innerHTML === '') {
            gameBoard.changeBoard(event.target.dataset.index, players[currentPlayer].gamePiece)
            currentPlayer = (currentPlayer === 1) ? 0 : 1
            _render()
        }
    }
    
})();