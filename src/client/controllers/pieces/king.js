import Piece from './piece';

class King extends Piece {
  constructor(coordinates, color) {
    super();
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'king';
  }
  setInitialMoves(piecesObj) {
    let currentColumn = this.coordinates[0];
    let currentRow = this.coordinates[1];
    let availableMoves = [];

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

    i = parseInt(currentRow) - 1;
    if (i > 0 && i < 9) {
      if (piecesObj[currentColumn + i]) {
        if (this.color !== piecesObj[currentColumn + i].color) {
          availableMoves.push(currentColumn + i)
        }
      } else {
        availableMoves.push(currentColumn + i)
      }
    }

    i = currentColumn.charCodeAt() + 1;
    let convertedCoordinate = String.fromCharCode(i) + currentRow;
    if (i > 97 && i < 104) {
      if (piecesObj[convertedCoordinate]) {
        if (this.color !== piecesObj[convertedCoordinate].color) {
          availableMoves.push(convertedCoordinate)
        }
      } else {
        availableMoves.push(convertedCoordinate)
      }
    }
    
    i = currentColumn.charCodeAt() - 1;
    convertedCoordinate = String.fromCharCode(i) + currentRow;
    if (i > 97 && i < 104) {
      if (piecesObj[convertedCoordinate]) {
        if (this.color !== piecesObj[convertedCoordinate].color) {
          availableMoves.push(convertedCoordinate)
        }
      } else {
        availableMoves.push(convertedCoordinate)
      }
    }

    i = parseInt(currentRow) + 1;
    if (currentColumn.length === 1) {

      currentColumn = currentColumn.charCodeAt() + 1;
      if (currentColumn > 97 && currentColumn < 104 && i > 0 && i < 9) {

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
    }
    currentColumn = String.fromCharCode(currentColumn);

    currentColumn = this.coordinates[0];
    i = parseInt(currentRow) + 1;
    if (currentColumn.length === 1) {

      currentColumn = currentColumn.charCodeAt() - 1;
      if (currentColumn > 97 && currentColumn < 104 && i > 0 && i < 9) {

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
    }
    currentColumn = String.fromCharCode(currentColumn);

    currentColumn = this.coordinates[0];
    i = parseInt(currentRow) - 1;
    if (currentColumn.length === 1) {

      currentColumn = currentColumn.charCodeAt() + 1;
      if (currentColumn > 97 && currentColumn < 104 && i > 0 && i < 9) {

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
    }
    currentColumn = String.fromCharCode(currentColumn);

    currentColumn = this.coordinates[0];
    i = parseInt(currentRow) - 1;
    if (currentColumn.length === 1) {

      currentColumn = currentColumn.charCodeAt() - 1;
      if (currentColumn > 97 && currentColumn < 104 && i > 0 && i < 9) {

        if (piecesObj[String.fromCharCode(currentColumn) + i]) {
          if (piecesObj[currentColumn + i]) {
            if (this.color !== piecesObj[currentColumn + i].color) {
              availableMoves.push(String.fromCharCode(currentColumn) + i)
            }
          }
        } else {
          availableMoves.push(String.fromCharCode(currentColumn) + i)
        }
      }
    }
    currentColumn = String.fromCharCode(currentColumn);

    this.availableMoves = availableMoves;
    // console.log('availableMoves from King', availableMoves);
  }

  // setPossibleMoves(piecesObj) {
  // }

  canTakeKing(piecesObj) {
    return false;
  }

}

export default King;