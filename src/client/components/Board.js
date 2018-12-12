import React from 'react'; 
import Square from './Square';
import Piece from './Piece';


class Board extends React.Component {
    constructor() {
        super(); 
        this.state = {}
    }
    componentDidMount () {
        this.setState ({
            a1 : {
                color: 'white',
                piece: 'rook',
            }
        })
    }
    
    render() {
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
        Object.keys(this.state).forEach((key, index) => {
            pieces.push(<Piece 
                key={'piece'+index} 
                coordinate={key} 
                color={this.state[key].color}
                pieceType={this.state[key].piece}/>)
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