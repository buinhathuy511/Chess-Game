class Position {
    constructor( row, col ) {
        this.row = row;
        this.col = col;
    }
}

class Piece {
    constructor(position, color) {
        this.position = position;
        this.color = color;
    }
    isValidMove(newPosition, board){

    }
}
class chessBoard {
    constructor() {
        this.board = this.createBoard();
    }

    createBoard() {
        
    };
}