import Piece from './piece';

class Pawn extends Piece {
  constructor(coordinates, color) {
    super();
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'pawn';
  }
  setInitialMoves(piecesObj) {
    let currentColumn = this.coordinates[0];
    let currentRow = this.coordinates[1];
    let availableMoves = [];

    // can move forward 1 space
    let i = parseInt(currentRow) + 1;
    if (i > 0 && i < 9) {
      if (piecesObj[currentColumn + i]) {
        if (this.color !== piecesObj[currentColumn + i].color) {
          availableMoves.push(currentColumn + i)
        }
      } else {
        availableMoves.push(currentColumn + i)
      }
    }

    // can move forward 2 spaces if on home row
    if (parseInt(currentRow) === 2 || parseInt(currentRow) === 7) {
      i = parseInt(currentRow) + 2;
      if (i > 0 && i < 9) {
        if (piecesObj[currentColumn + i]) {
          if (this.color !== piecesObj[currentColumn + i].color) {
            availableMoves.push(currentColumn + i)
          }
        } else {
          availableMoves.push(currentColumn + i)
        }
      }
    }

    // can move diagonally right 1 space if occupied by opponent's color
    i = parseInt(currentRow) + 1;
    if (currentColumn.length === 1) {

      currentColumn = currentColumn.charCodeAt() + 1;
      if (currentColumn > 97 && currentColumn < 104 && i > 0 && i < 9) {

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
            if (this.color !== piecesObj[String.fromCharCode(currentColumn) + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
        } 
      }
    }
    currentColumn = String.fromCharCode(currentColumn);

    // can move diagonally left 1 space if occupied by opponent's color
    currentColumn = this.coordinates[0];
    i = parseInt(currentRow) + 1;
    if (currentColumn.length === 1) {

      currentColumn = currentColumn.charCodeAt() - 1;
      if (currentColumn > 97 && currentColumn < 104 && i > 0 && i < 9) {

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (this.color !== piecesObj[String.fromCharCode(currentColumn) + i].color) {
            availableMoves.push(String.fromCharCode(currentColumn) + i)
          }
        }
      }
    }
    currentColumn = String.fromCharCode(currentColumn);

    this.availableMoves = availableMoves;
    // console.log('availableMoves from Pawn', availableMoves);
  }

  setPossibleMoves(piecesObj) {
  }

  canTakeKing(piecesObj) {
    return false;
  }

}

export default Pawn;