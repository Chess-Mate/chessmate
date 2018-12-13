import Piece from './piece';

class Queen extends Piece {
  constructor(coordinates, color) {
    super();
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'queen';
  }

  setInitialMoves(piecesObj) {
    let currentColumn = this.coordinates[0];
    let currentRow = this.coordinates[1];
    let availableMoves = [];

    for (let i = parseInt(currentRow) + 1; i <= 8; i++) {

      if (piecesObj[currentColumn + i]) {
        if (this.color !== piecesObj[currentColumn + i].color) {
          availableMoves.push(currentColumn + i)
        }
        break;
      } else {
        availableMoves.push(currentColumn + i)
      }
    }
    for (let i = parseInt(currentRow) - 1; i > 0; i--) {
      if (piecesObj[currentColumn + i]) {
        if (this.color !== piecesObj[currentColumn + i].color) {
          availableMoves.push(currentColumn + i)
        }
        break;
      } else {
        availableMoves.push(currentColumn + i)
      }
    }
    //convert column letter into ASCII number code set up to h(104)
    for (let i = currentColumn.charCodeAt() + 1; i <= 104; i++) {
      let convertedCoordinate = String.fromCharCode(i) + currentRow;
      //convert ASCII code back to letter to concact with row integer to get this.coordinates used to reference in piecesObj
      if (piecesObj[convertedCoordinate]) {
        if (this.color !== piecesObj[convertedCoordinate].color) {
          availableMoves.push(convertedCoordinate)
        }
        break;
      } else {
        availableMoves.push(convertedCoordinate)
      }
    }
    for (let i = currentColumn.charCodeAt() - 1; i >= 97; i--) {
      let convertedCoordinate = String.fromCharCode(i) + currentRow;
      //if theres a piece on the left
      //string our column ASCII code and change back to letter
      if (piecesObj[convertedCoordinate]) {
        //check to see if its own color or not
        if (this.color !== piecesObj[convertedCoordinate].color) {
          availableMoves.push(convertedCoordinate)
        }
        break;
      } else {
        availableMoves.push(convertedCoordinate)
      }
    }

    for (let i = parseInt(currentRow) + 1; i <= 8; i++) {
      if (currentColumn.length === 1) {

        currentColumn = currentColumn.charCodeAt() + 1;
        if (currentColumn < 97 || currentColumn > 104) break;

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

    for (let i = parseInt(currentRow) + 1; i <= 8; i++) {
      if (currentColumn.length === 1) {
        currentColumn = currentColumn.charCodeAt() - 1;
        if (currentColumn < 97 || currentColumn > 104) break;

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
        if (currentColumn < 97 || currentColumn > 104) break;

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
        if (currentColumn < 97 || currentColumn > 104) break;

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
    console.log('availableMoves from Queen', availableMoves);
  }
}

export default Queen;

