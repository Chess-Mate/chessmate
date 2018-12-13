//Parent Class of all pieces 
class Piece {
  constructor () {
    this.availableMoves = [];
  }
  setPossibleMoves(piecesObj) {
    // check if the same side king is in check
    let movesToBeRemoved = [];
    //iterate possible moves for each move we want to assign coordinates into copyPieceObj
    this.availableMoves.forEach((move, i) => {
      let copyPiecesObj = {};
      for (let childObject in piecesObj) {
        //after looping each key coordinate in piecesObj, assign values to childObjCopy
        let childObjectCopy = Object.assign({}, piecesObj[childObject]);
        //add canTakeKing property and bind them
        childObjectCopy.canTakeKing = piecesObj[childObject].canTakeKing.bind(childObjectCopy);
        //add setInitialMoves (from sub class) property and bind. 
        childObjectCopy.setInitialMoves = piecesObj[childObject].setInitialMoves.bind(childObjectCopy);
        //set keys(aka copied coordinates) to childObjCopy object on line 11.
        copyPiecesObj[childObject] = childObjectCopy;
      }
      //in copyObj set original coordinate to new coordinate
      copyPiecesObj[this.coordinates].coordinates = move;
      //then set new coodrinate and set it to newsly set coordinate. 
      copyPiecesObj[move] = copyPiecesObj[this.coordinates];
      //after setting new delete the old coordinate. 
      delete copyPiecesObj[this.coordinates];

      //rerun all the moves
      // console.log('beforeupdatemove', copyPiecesObj)
      for(let pieceObj in copyPiecesObj) {
        //set new avaiable moves on piece with new coordinates and update initialMoves with copyObj.
        copyPiecesObj[pieceObj].setInitialMoves(copyPiecesObj)
      }

      // console.log('afterupdatemove', copyPiecesObj)

      for (let pieceObj in copyPiecesObj) {   
        if(copyPiecesObj[pieceObj].color !== this.color) {
          //if king is in check remove all other moves except for ones that will prevent kingChecked to be true. 
          //meaning push only moves that will make canTakeKing false. 
          if (copyPiecesObj[pieceObj].canTakeKing(copyPiecesObj)) {
            // console.log(move)
            movesToBeRemoved.push(move); //movesToBeRemoved array @ line 8
            break
          }
        }
      }
    })
    
    //movesTobeRemoved array exists in line 8
    movesToBeRemoved.forEach(moveToBeRemoved => {
      //from all avaiable moves filter only moves that are not in moveTobeRemoved array.
      this.availableMoves = this.availableMoves.filter(move => move != moveToBeRemoved);
    })
    // console.log(this.piece, this.coordinates, availableMoves)
    // this.availableMoves = availableMoves;
    console.log(this.coordinates + ": " + this.availableMoves);
  }
  //each piece object(is constructor object itself and it has coordinates,color,piece, and inherits X,Y coorinates from piece.js)
  canTakeKing(piecesObj) {
    for (let pieceObj in piecesObj) {
      //if piece color is opposite and is "king", we check "includes" to see if coordinates are in avaiableMoves
      //if exists, set true, else false. 
      if(piecesObj[pieceObj].color !== this.color && piecesObj[pieceObj].piece === 'king') {
        return this.availableMoves.includes(piecesObj[pieceObj].coordinates) ? true : false;
      }
    } 
  }
}
export default Piece;