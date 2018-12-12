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
        console.log(availableMoves, 'North')
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
        console.log(availableMoves, 'South')
    }

    //////EAST MOVES////////
    //convert column letter into ASCII number code set up to h(104)
    for (let i = currentColumn.charCodeAt() + 1; i<104; i++) {
        let convertedCoordinate = String.fromCharCode(i) + currentRow; 
        //convert ASCII code back to letter to concact with row integer to get coordinates used to reference in pieceObj
        if (pieceObj[convertedCoordinate]) {
            if (pieceColor !== pieceObj[convertedCoordinate].color) {
                availableMoves.push(convertedCoordinate)
            } 
            break;
        } else {
            availableMoves.push(convertedCoordinate)
        } 
        console.log(availableMoves, 'East')
    }
    

    ////////WEST MOVES/////////
    for (let i = currentColumn.charCodeAt() - 1; i >=97; i--) {
        let convertedCoordinate = String.fromCharCode(i) + currentRow; 
        //if theres a piece on the left
        //string our column ASCII code and change back to letter
        if(pieceObj[convertedCoordinate]) {
            //check to see if its own color or not
            if(pieceColor !== pieceObj[convertedCoordinate].color) {
                availableMoves.push(convertedCoordinate) 
            }
            break;
        } else {
            availableMoves.push(convertedCoordinate)
        }
        console.log(availableMoves, 'West')
    }


}