export default function possibleMoves(pieceObj, coordinates, pieceColor) {
    

    let currentColumn = coordinates[0];
    let currentRow = coordinates[1]
    let availableMoves = [];

    console.log(pieceObj)
    /////NORTH MOVES/////
    for (let i = parseInt(currentRow) +1; i <= 8; i++) {
        if (pieceObj[currentColumn + i]) {
            if (pieceColor !== pieceObj[currentColumn + i].color) {
                availableMoves.push(currentColumn + i)
            } 
            break;
        } else {
            availableMoves.push(currentColumn + i)
        }
        // console.log(availableMoves, 'North')
    }

    //////SOUTH MOVES//////
    for (let i = parseInt(currentRow) -1; i>0; i--) {
        if (pieceObj[currentColumn + i]) {
            if (pieceColor !== pieceObj[currentColumn + i].color) {
                availableMoves.push(currentColumn + i)
            } 
            break;
        } else {
            availableMoves.push(currentColumn + i)
        } 
        // console.log(availableMoves, 'South')
    }

    //////EAST MOVES////////
    for (let i = currentColumn.charCodeAt() + 1; i<104; i++) {
        if (pieceObj[currentRow + i]) {
            if (pieceColor !== pieceObj[currentRow + i].color) {
                availableMoves.push(String.fromCharCode(i) + currentRow)
            } 
            break;
        } else {
            availableMoves.push(String.fromCharCode(i) + currentRow)
        } 
        // console.log(availableMoves, 'East')
    }
    

    ////////WEST MOVES/////////
    for (let i = currentColumn.charCodeAt() - 1; i >=97; i--) {
        //if theres a piece on the left
        if(pieceObj[currentRow - i]) {
            //check to see if its own color or not
            if(pieceColor !== pieceObj[currentRow - i].color) {
                availableMoves.push(String.fromCharCode(i) + currentRow) 
            }
            break;
        } else {
            availableMoves.push(String.fromCharCode(i) + currentRow)
        }
        console.log(availableMoves, 'West')
    }


}