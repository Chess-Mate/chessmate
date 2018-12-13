class Piece {
  constructor () {
    this.availableMoves = [];
  }
  setPossibleMoves(piecesObj) {
    // check if the same side king is in check
    let movesToBeRemoved = [];
    this.availableMoves.forEach((move, i) => {
      console.log(i)
      let copyPiecesObj = {};
      for (let childObject in piecesObj) {
        let childObjectCopy = Object.assign({}, piecesObj[childObject]);
        childObjectCopy.canTakeKing = piecesObj[childObject].canTakeKing.bind(childObjectCopy);
        childObjectCopy.setInitialMoves = piecesObj[childObject].setInitialMoves.bind(childObjectCopy);
        copyPiecesObj[childObject] = childObjectCopy;
      }
      copyPiecesObj[this.coordinates].coordinates = move;
      copyPiecesObj[move] = copyPiecesObj[this.coordinates];
      delete copyPiecesObj[this.coordinates];

      //rerun all the moves
      // console.log('beforeupdatemove', copyPiecesObj)
      for(let pieceObj in copyPiecesObj) {
        copyPiecesObj[pieceObj].setInitialMoves(copyPiecesObj)
      }

      // console.log('afterupdatemove', copyPiecesObj)

      for (let pieceObj in copyPiecesObj) {   
        if(copyPiecesObj[pieceObj].color !== this.color) {
          if (copyPiecesObj[pieceObj].canTakeKing(copyPiecesObj)) {
            // console.log(move)
            movesToBeRemoved.push(move);
            break
          }
        }
      }
    })
    

    movesToBeRemoved.forEach(moveToBeRemoved => {
      this.availableMoves = this.availableMoves.filter(move => move != moveToBeRemoved);
    })
    // console.log(this.piece, this.coordinates, availableMoves)
    // this.availableMoves = availableMoves;
    console.log(this.coordinates + ": " + this.availableMoves);
  }

  canTakeKing(piecesObj) {
    for (let pieceObj in piecesObj) {
      if(piecesObj[pieceObj].color !== this.color && piecesObj[pieceObj].piece === 'king') {
        return this.availableMoves.includes(piecesObj[pieceObj].coordinates) ? true : false;
      }
    } 
  }
}
export default Piece;