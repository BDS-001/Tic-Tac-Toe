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
            if (board[index] === '') return false
        }
        return true
    }

    const clearBoard = function() {
        for (let index = 0; index < board.length; index++) {
            board[index] = ''
        }
    }

    return {board, changeBoard, checkVictory, checkTie, clearBoard}
})();

//create player factory
function createPlayer(name, gamePiece) {

    let score = 0

    return {
        name, gamePiece, score
    }
}

// game module
const game = (function () {
    const players = [createPlayer('Player 1','X'), createPlayer('Player 2','O')]
    let currentPlayer = 0
    let start = false
    
    //cacheDom
    const boardSections = document.querySelectorAll('.game-square')
    const player1 = document.querySelector('#player1')
    const player2 = document.querySelector('#player2')
    const domPlayers = document.querySelectorAll('.player')
    const changeNameButtons = document.querySelectorAll('.change-name')
    const voctoryMessage = document.querySelector('.victory-message')

    //bind events
    boardSections.forEach(function(boardSection) {
        boardSection.addEventListener('click', placeGamePiece)
    })

    changeNameButtons.forEach(function(changeNameButton) {
        changeNameButton.addEventListener('click', changePlayerName)
    })

    document.querySelector('.reset').addEventListener('click', _resetGame)
    document.querySelector('.start').addEventListener('click', _startGame)

    //render to html
    function _render() {
        for (let index = 0; index < gameBoard.board.length; index++) {
            boardSections[index].innerHTML = gameBoard.board[index]
        }
    }

    function _resetGame() {
        players[0].score = 0
        players[1].score = 0
        gameBoard.clearBoard()
        _render()
    }

    function _startGame() {
        if (start === false) {
            gameBoard.clearBoard()
            _render()
            voctoryMessage.innerHTML = ''
            start = true   
        }
    }

    function updatePlayer(currentPlayer) {
        domPlayers[currentPlayer].innerHTML = `${players[currentPlayer].name}: ${players[currentPlayer].score}`
    }

    function changePlayerName(event) {
        //open form
    }

    function placeGamePiece(event) {
        if (event.target.innerHTML === '' && start === true) {
            gameBoard.changeBoard(event.target.dataset.index, players[currentPlayer].gamePiece)
            _render()
            checkGameState()

            //change the current player
            currentPlayer = (currentPlayer === 1) ? 0 : 1
        }
    }

    function checkGameState() {
        if (gameBoard.checkVictory(players[currentPlayer].gamePiece)) {
            players[currentPlayer].score++
            updatePlayer(currentPlayer)
            voctoryMessage.innerHTML = `${players[currentPlayer].name} is the winner!`
            start = false
        } else if (gameBoard.checkTie()) {
            voctoryMessage.innerHTML = 'Its a tie!'
            start = false
        }
    }
    
})();