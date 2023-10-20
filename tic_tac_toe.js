//gameBoard module
const gameBoard = (function() {
    const board = ['','','','','','','','','']

    const changeBoard = function(index, val) {
        if (board[index] === '') {
            board[index] = val
        }
    }

    const checkBoard = function(gamePiece) {
        return _checkRows(gamePiece) || _checkColumns(gamePiece)
    }

    const _checkRows = function(gamePiece) {
        const first = 0
        const second = 1
        const third = 2

        for (let i = 0; i < 9; i+=3) {
            if (board[first + i] === gamePiece && board[second + i] === gamePiece && board[third + i] === gamePiece) {
                return true
            }
        }
        
        return false
    }

    const _checkColumns = function(gamePiece) {
        const first = 0
        const second = 3
        const third = 6

        for (let i = 0; i <= 3; i++) {
            if (board[first + i] === gamePiece && board[second + i] === gamePiece && board[third + i] === gamePiece) {
                return true
            }
        }
        return false
    }

    return {board, changeBoard, checkBoard}
})();

//create player factory
function createPlayer(name, gamePiece) {

    return {
        name, gamePiece
    }
}

// game module
const game = (function () {
    const players = [createPlayer('one','X'), createPlayer('two','O')]
    let currentPlayer = 0
    
    //cacheDom
    const boardSections = document.querySelectorAll('.game-square')

    //bind events
    boardSections.forEach(function(boardSection) {
        boardSection.addEventListener('click', placeGamePiece)
    })

    _render()

    //render to html
    function _render() {
        for (let index = 0; index < gameBoard.board.length; index++) {
            boardSections[index].innerHTML = gameBoard.board[index]
        }
    }

    function placeGamePiece(event) {
        if (event.target.innerHTML === '') {
            gameBoard.changeBoard(event.target.dataset.index, players[currentPlayer].gamePiece)
            _render()
            console.log(gameBoard.checkBoard(players[currentPlayer].gamePiece))
            currentPlayer = (currentPlayer === 1) ? 0 : 1
        }
    }

    function gameState() {

    }
    
})();