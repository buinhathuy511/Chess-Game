class pieceBase {
    constructor(name, whitePiece) {
      if (new.target === PieceBase) {
        throw new Error("Cannot instantiate abstract class PiecesBase");
      }
      this.name = name;
      this.whitePiece = whitePiece;
    }
    showValidMoves(cell) {}
    isWhitePiece() {}
  }