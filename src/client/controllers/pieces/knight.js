import Piece from './piece' //import parent class

//subclass of parent. 
class Knight extends Piece {
  constructor (coordinates, color) {
    super();
    // this.availableMoves = [];
    this.coordinates = coordinates;
    this.color = color;
    this.piece = 'knight';
  }


  setInitialMoves(piecesObj) {
    //trim jS method removes white space from both sides of a string
    let currentColumn = this.coordinates[0].trim();
    currentColumn = currentColumn.charCodeAt() - 96;
    let currentRow = parseInt(this.coordinates[1]);
    // console.log(currentColumn,currentRow)

    const convertToLetter = (num1, num2, currentColumn, currentRow) => {
      // console.log(String.fromCharCode(currentColumn + num1 + 96) + (currentRow + num2), 'converted column and row')
      return String.fromCharCode(currentColumn + num1 + 96) + (currentRow + num2);
    }

    let availableMoves = [];
    //compared to the rook, we needed to convert our letter to a ascii number and get coordinates this way to get the values we need for a knights move. 
    if (currentColumn + 1 <= 8 && currentRow + 2 <= 8) {
      if (piecesObj[convertToLetter(1, 2, currentColumn, currentRow)] && this.color !== piecesObj[convertToLetter(1,2, currentColumn, currentRow)].color || !piecesObj[convertToLetter(1, 2, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(1,2, currentColumn, currentRow));
      } 
    } 
    if (currentColumn + 2 <= 8 && currentRow + 1 <= 8) {
      if (piecesObj[convertToLetter(2, 1, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(2, 1, currentColumn, currentRow)].color || !piecesObj[convertToLetter(2, 1, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(2, 1, currentColumn, currentRow));
      }
    }
    if (currentColumn - 1 >= 1 && currentRow - 2 >= 1) {
      if (piecesObj[convertToLetter(-1, -2, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(-1, -2, currentColumn, currentRow)].color || !piecesObj[convertToLetter(-1, -2, currentColumn, currentRow)]) { 
        availableMoves.push(convertToLetter(-1, -2, currentColumn, currentRow));
      }
    }
    if (currentColumn - 2 >= 1 && currentRow - 1 >= 1) {
      if (piecesObj[convertToLetter(-2, -1, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(-2, -1, currentColumn, currentRow)].color || !piecesObj[convertToLetter(-2, -1, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(-2, -1, currentColumn, currentRow));
      }
    }
    if (currentColumn - 1 >= 1 && currentRow + 2 <= 8) {
      if (piecesObj[convertToLetter(-1, 2, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(-1, 2, currentColumn, currentRow)].color || !piecesObj[convertToLetter(-1, 2, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(-1, 2, currentColumn, currentRow));
      }
    }
    if (currentColumn - 2 >= 1 && currentRow + 1 <= 8) {
      if(piecesObj[convertToLetter(-2, 1, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(-2, 1, currentColumn, currentRow)].color || !piecesObj[convertToLetter(-2, 1, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(-2, 1, currentColumn, currentRow));
      }
    }
    if (currentColumn + 1 <= 8 && currentRow -2 >= 1) {
      if(piecesObj[convertToLetter(1, -2, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(1, -2, currentColumn, currentRow)].color || !piecesObj[convertToLetter(1, -2, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(1, -2, currentColumn, currentRow));
      }
    }
    if (currentColumn + 2 <= 8 && currentRow -1 >= 1) {
      if(piecesObj[convertToLetter(2, -1, currentColumn, currentRow)] &&this.color !== piecesObj[convertToLetter(2, -1, currentColumn, currentRow)].color || !piecesObj[convertToLetter(2, -1, currentColumn, currentRow)]) {
        availableMoves.push(convertToLetter(2, -1, currentColumn, currentRow));
      }
    }

    this.availableMoves = availableMoves;
    // console.log("knight-moves", availableMoves);
  }
}

export default Knight;

