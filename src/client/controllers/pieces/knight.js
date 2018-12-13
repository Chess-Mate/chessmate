import Piece from './piece'

class Knight extends Piece {
  constructor (coordinates, color) {
    super();
    // this.availableMoves = [];
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'knight';
  }


  setInitialMoves(piecesObj) {
    let currentColumn = this.coordinates[0].trim();
    currentColumn = currentColumn.charCodeAt() - 96;
    let currentRow = parseInt(this.coordinates[1]);
    // console.log(currentColumn,currentRow)

    let availableMoves = [];
    if (currentColumn + 1 <= 8 && currentRow + 2 <= 8) {
      availableMoves.push(String.fromCharCode(currentColumn + 1 + 96) + (currentRow + 2));
    }
    if (currentColumn + 2 <= 8 && currentRow + 1 <= 8) {
      availableMoves.push(String.fromCharCode(currentColumn + 2 + 96) + (currentRow + 1));
    }
    if (currentColumn - 1 >= 1 && currentRow - 2 >= 1) {
      availableMoves.push(String.fromCharCode(currentColumn - 1 + 96) + (currentRow - 2 ));
    }
    if (currentColumn - 2 >= 1 && currentRow - 1 >= 1) {
      availableMoves.push(String.fromCharCode(currentColumn - 2 + 96) + (currentRow - 1 ));
    }
    if (currentColumn - 1 >= 1 && currentRow + 2 <= 8) {
      availableMoves.push(String.fromCharCode(currentColumn - 1 + 96) + (currentRow + 2 ));
    }
    if (currentColumn - 2 >= 1 && currentRow + 1 <= 8) {
      availableMoves.push(String.fromCharCode(currentColumn - 2 + 96) + (currentRow + 1 ));
    }
    if (currentColumn + 1 <= 8 && currentRow -2 >= 1) {
      availableMoves.push(String.fromCharCode(currentColumn + 1 + 96) + (currentRow - 2 ));
    }
    if (currentColumn + 2 <= 8 && currentRow -1 >= 1) {
      availableMoves.push(String.fromCharCode(currentColumn + 2 + 96) + (currentRow - 1 ));
    }

    this.availableMoves = availableMoves;
    // console.log("knight-moves", availableMoves);
  }
}

export default Knight;

