import React from 'react'; 
import Square from './Square';
import possibleMoves from '../controllers/pieces/rook';


class Piece extends React.Component {
    constructor() {
        super(); 
        this.state = {
            yPosition : null,
            xPosition : null,
        }
        this.handleClickPiece = this.handleClickPiece.bind(this);
        
    }
    componentDidMount () {
        this.setState({
            yPosition : this.convertNumberCoordinateToYPosition(this.props.coordinate.split('')[1]),
            xPosition : this.convertLetterCoordinateToXPosition(this.props.coordinate.split('')[0]),
        })
    }
    // componentDidUpdate () {
    //     this.setState({
    //         yPosition : this.convertNumberCoordinateToYPosition(this.props.coordinate.split('')[1]),
    //         xPosition : this.convertLetterCoordinateToXPosition(this.props.coordinate.split('')[0]),
    //     })
    // }

    handleClickPiece = (e) => {
        possibleMoves(this.props.pieceObj, this.props.coordinate, this.props.pieceColor);
    }

    convertLetterCoordinateToXPosition(letter) {
        switch (letter) {
            case 'a' : {
                return 0;
            }
            case 'b' : {
                return 1;
            }
            case 'c' : {
                return 2;
            }
            case 'd' : {
                return 3;
            }
            case 'e' : {
                return 4;
            }
            case 'f' : {
                return 5;
            }
            case 'g' : {
                return 6;
            }
            case 'h' : {
                return 7;
            }
        }
    }
    convertNumberCoordinateToYPosition(number) {
        return number - 1;
    }
    
    render() {
        let cssTop = 350 - (this.state.yPosition * 50);
        let cssLeft = this.state.xPosition * 50;
        let color = this.props.color

        console.log(cssTop);
        let styles = {
            top : cssTop,
            left : cssLeft,
            color: color
        }
        return (
            <div onClick={(e)=>{this.handleClickPiece(e)}} className='piece' style={styles}>
                <span>{this.props.pieceType}</span>
            </div>
        )
    }

}

export default Piece;