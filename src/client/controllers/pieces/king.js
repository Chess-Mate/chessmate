class King {
  constructor (coordinates, color) {
    this.availableMoves = [];
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'king';
  }
  setInitialMoves(piecesObj){
    
  }
  setPossibleMoves(piecesObj) {
  }
  canTakeKing(piecesObj) {
    return false;
  }
}

export default King;