import React, { Component } from 'react';
import Move from './Move.js'
import {
    GameRules,
    GameMoves,
    Result,
    winner
} from './Rules.js'

function GameVerdict(props) {
    let verdict;
    if (Result.WIN === props.result) {
        verdict = <p>You won !</p>
    } else if (Result.LOSE === props.result) {
        verdict = <p>You lost !</p>
    } else if (Result.DRAW === props.result) {
        verdict = <p>It's a draw !</p>
    } else {
        return false;
    }
     return (
    <div>
        <p>The computer chose {props.p2Move}</p>
        <p>{verdict}</p>
    </div>
     );
}

class MoveContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            result: false,
        };
    }

    handleChange(e) {
        this.setState({ result: e.target.value });
    }

    onResult = (result, p2Move) => {
        this.setState({
            result: result,
            p2Move: p2Move,
        });
    }


    render() {
        const result = this.state.result;
        return (
            <div>
                <Move type={GameRules.ROCK} onResult={this.onResult}/>
                <Move type={GameRules.PAPER} onResult={this.onResult} />
                <Move type={GameRules.SCISSORS} onResult={this.onResult} />
                <GameVerdict result={result} p2Move={this.state.p2Move}/>
            </div>
        );
    }
}

export default MoveContainer;