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
    // let currentColumn = this.coordinates[0];
    // let currentRow = this.coordinates[1]
    // let availableMoves = [];
    // for (let i = parseInt(currentRow) +1; i <= 8; i++) {

    //   for (let j = currentColumn.charCodeAt() + 1; j <=104; j++) {
    //     if (piecesObj[String.fromCharCode(currentColumn) + i]) {
    //       if (this.color !== piecesObj[currentColumn + i].color) {
    //           availableMoves.push(currentColumn + i)
    //       } 
    //       break;
    //     } else {
    //         availableMoves.push(currentColumn + i)
    //     }
    //   }
        
    // }

    // this.availableMoves = availableMoves;
    // console.log(availableMoves);
  }
}

export default Bishop;

