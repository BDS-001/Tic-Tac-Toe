//gameBoard module
const gameBoard = (function() {
    const board = ['x','o','z','q','w','e','y','u','i']

    const changeBoard = function(index, val) {
        board[index] = val
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
    
    //cacheDom
    const boardSections = document.querySelectorAll('.game-square')

    _render()

    //render function
    function _render() {
        for (let index = 0; index < gameBoard.board.length; index++) {
            boardSections[index].innerHTML = gameBoard.board[index]
        }
    }
    
})();