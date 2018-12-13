import Piece from './piece'

class Bishop extends Piece {
  constructor (coordinates, color) {
    super();
    // this.availableMoves = [];
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'bishop';
  }

  setInitialMoves(piecesObj) {
    let currentColumn = this.coordinates[0];
    let currentRow = this.coordinates[1];
    let availableMoves = [];

    for (let i = parseInt(currentRow) +1; i <= 8; i++) {
      if (currentColumn.length === 1) {

        currentColumn = currentColumn.charCodeAt() + 1;
        if (currentColumn > 104) break;

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (this.color !== piecesObj[currentColumn + i].color) {
            availableMoves.push(String.fromCharCode(currentColumn) + i)
          }
          break;
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
      currentColumn = String.fromCharCode(currentColumn);
    }

    currentColumn = this.coordinates[0];

    for (let i = parseInt(currentRow) + 1; i <= 8; i++) {
      if (currentColumn.length === 1) {
        currentColumn = currentColumn.charCodeAt() - 1;
        if (currentColumn < 97) break;

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
          break;
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
      currentColumn = String.fromCharCode(currentColumn);
    }

    currentColumn = this.coordinates[0];

    for (let i = parseInt(currentRow) - 1; i > 0; i--) {
      if (currentColumn.length === 1) {

        currentColumn = currentColumn.charCodeAt() + 1;
        if (currentColumn > 104) break;

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
          break;
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
      currentColumn = String.fromCharCode(currentColumn);
    }

    currentColumn = this.coordinates[0];

    for (let i = parseInt(currentRow) - 1; i > 0; i--) {
      if (currentColumn.length === 1) {

        currentColumn = currentColumn.charCodeAt() - 1;
        if (currentColumn > 104) break;

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
          break;
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
      currentColumn = String.fromCharCode(currentColumn);
    }

    this.availableMoves = availableMoves;
    console.log('availableMoves from Bishop', availableMoves);
  }
}

export default Bishop;

