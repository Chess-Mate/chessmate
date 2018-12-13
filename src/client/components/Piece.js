import React from 'react'; 
import Square from './Square';


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
            yPosition : this.convertNumberCoordinateToYPosition(this.props.pieceObj.coordinates.split('')[1]),
            xPosition : this.convertLetterCoordinateToXPosition(this.props.pieceObj.coordinates.split('')[0]),
        })
    }
    // componentDidUpdate () {
    //     this.setState({
    //         yPosition : this.convertNumberCoordinateToYPosition(this.props.coordinate.split('')[1]),
    //         xPosition : this.convertLetterCoordinateToXPosition(this.props.coordinate.split('')[0]),
    //     })
    // }

    handleClickPiece = (e) => {
        // this.props.pieceObj.setPossibleMoves(this.props.piecesObj, this.props.pieceObj.coordinate, this.props.pieceObj.pieceColor);
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
        let pieceColor = this.props.pieceObj.color

        let styles = {
            top : cssTop,
            left : cssLeft,
            color: pieceColor
        }
        return (
            <div onClick={(e)=>{this.handleClickPiece(e)}} className='piece' style={styles}>
                <span>{this.props.pieceObj.piece}</span>
            </div>
        )
    }

}

export default Piece;