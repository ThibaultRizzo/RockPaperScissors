import React, { Component } from 'react';
import {
    GameRules,
    GameMoves,
    Result,
    winner
} from './Rules.js'

class Move extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        };
        console.log(GameRules);
    }

    generateComputerMove = () => {
         const randomPosition = Math.floor(Math.random() * (GameMoves.length));
         const result =  GameMoves[randomPosition];
         console.log(`Computer just chose ${result}`);
         return result;
    }

    processResult = (p1Move) => {
        const p2Move = this.generateComputerMove();
        const result = winner(p1Move, p2Move);
        this.props.onResult(result, p2Move);
    }

    render() {
        const type = this.state.type;
        return (
            <div>
               <input type="button" value={type} onClick={(e) => this.processResult(type, e)}/>
            </div>
        );
    }
}

export default Move;