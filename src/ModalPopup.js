import React, { Component } from 'react';
import './ModalPopup.css';
import { Result } from './Rules.js';

function ResultComponent(props) {
  let result;
  if (!props.result) {
    result = false;
  } else if (Result.WIN === props.result) {
    result = <p className="win">You won !</p>;
  } else if (Result.LOSE === props.result) {
    result = <p className="lose">You lost !</p>;
  } else {
    result = <p className="draw">It's a draw !</p>;
  }
  return result;
}

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
  }

  /**
   * Closes popup after one second
   */
  closePopup() {
    setTimeout(this.props.closePopup, 1000);
  }

  render() {
    const result = this.props.result;
    return (
      <div
        className="modal-background smooth-appear full-page-background"
        onClick={this.closePopup()}
      >
        <div className="modal-popup">
          <ResultComponent result={result} />
        </div>
      </div>
    );
  }
}

export default ModalPopup;
