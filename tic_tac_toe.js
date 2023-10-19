function GameBoard() {
    this.board = [['','',''],['','',''],['','','']]
}

function Player(selectedGamePiece) {
    let gamePiece = selectedGamePiece
    this.setGamePiece = function(newGamePiece) {
        gamePiece = newGamePiece
    },
    this.getGamePiece = function() {
        return gamePiece
    }
}

const game = (function () {
    
})();