//gameBoard module
const gameBoard = (function() {
    const board = ['','','','','','','','','']

    const changeBoard = function(index, val) {
        if (board[index] === '') {
            board[index] = val
        }
    }

    const checkVictory = function(gamePiece) {
        return _checkRows(gamePiece) || _checkColumns(gamePiece) || _checkDiag(gamePiece)
    }

    const _checkRows = function(gamePiece) {
        for (let i = 0; i < 9; i+=3) {
            if (board[0 + i] === gamePiece && board[1 + i] === gamePiece && board[2 + i] === gamePiece) {
                return true
            }
        }
        return false
    }

    const _checkColumns = function(gamePiece) {
        for (let i = 0; i <= 3; i++) {
            if (board[0 + i] === gamePiece && board[3 + i] === gamePiece && board[6 + i] === gamePiece) {
                return true
            }
        }
        return false
    }

    const _checkDiag = function(gamePiece) {
        if (board[0] === gamePiece && board[4] === gamePiece && board[8] === gamePiece) return true
        if (board[2] === gamePiece && board[4] === gamePiece && board[6] === gamePiece) return true
        return false
    }

    const checkTie = function() {
        for (let index = 0; index < board.length; index++) {
            if (board[index] != '') return false
        }
        return true
    }

    return {board, changeBoard, checkVictory, checkTie}
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
            console.log(gameBoard.checkVictory(players[currentPlayer].gamePiece))
            currentPlayer = (currentPlayer === 1) ? 0 : 1
        }
    }

    function gameState() {

    }
    
})();