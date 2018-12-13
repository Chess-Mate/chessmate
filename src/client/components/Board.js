import React from 'react'; 
import Square from './Square';
import Piece from './Piece';
import Rook from '../controllers/pieces/rook';
import King from '../controllers/pieces/king';
import Bishop from '../controllers/pieces/bishop';
import Knight from '../controllers/pieces/knight';
import Queen from '../controllers/pieces/queen';

class Board extends React.Component {
    constructor() {
        super(); 
        this.state = {
            piecesObject : {
                a2 : new Rook('a2', 'white'),
                e1 : new King('e1', 'white'),
                g5 : new Bishop('g5', 'white'),
                c1 : new Knight('c1', 'white'),
                c3 : new Queen('c3', 'white'),
                // e1 : {
                //     color: 'white',
                //     piece: 'king',
                // },
                e4: new Rook('e4', 'black'),
            }
        };
    }

    componentDidMount () {
        for (let key in this.state.piecesObject) {
            this.state.piecesObject[key].setInitialMoves(this.state.piecesObject)
        }
        for (let key in this.state.piecesObject) {
            this.state.piecesObject[key].setPossibleMoves(this.state.piecesObject)
        }
    }
    
    render() {
        // console.log(this.state.piecesObject);
        let squares = [];
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if (i % 2 === 0 && j % 2 === 0) {
                    squares.push(<Square key={'square'+i+j} color={'beige'}/>)
                } 
                else if (i % 2 === 0 && j % 2 === 1) {
                    squares.push(<Square key={'square'+i+j} color={'green'}/>)
                }
                else if (i % 2 === 1 && j % 2 === 0) {
                    squares.push(<Square key={'square'+i+j} color={'green'}/>)
                }
                else if (i % 2 === 1 && j % 2 === 1) {
                    squares.push(<Square key={'square'+i+j} color={'beige'}/>)
                }
            }
        }

        let pieces = [];
        Object.keys(this.state.piecesObject).forEach((key, index) => {
            pieces.push(
                <Piece 
                    key={'piece'+index} 
                    pieceObj={this.state.piecesObject[key]}
                    piecesObj={this.state.piecesObject}
                />
            )
        });

        return (
            <div id='board'>
                {squares}
                {pieces}
            </div>
        )  
    }

}

export default Board;