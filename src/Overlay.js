import React, { Component } from 'react';
import './Overlay.css';

class Overlay extends Component {
    setGameType = (e) => {
        this.props.onOptionChosed(e.target.value);
    };
    render() {
        return (
            <div id="Overlay" className="full-page-background smooth-appear">
                <input
                    type="button"
                    value="Player vs AI"
                    className="overlay-button special-button"
                    onClick={e => this.setGameType(e)}
                />
                <input
                    type="button"
                    value="AI vs AI"
                    className="overlay-button special-button"
                    onClick={e => this.setGameType(e)}
                />
            </div>
        );
    }
}

export default Overlay;