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


/**
 * Modal popup Component
 * TODO: Refactor it to allow more reusability and custom messages
 */
class ModalPopup extends Component {

    componentDidMount() {
        setTimeout(this.props.closePopup, 1000);
    }

  /**
   * Closes popup after one second
   */
    render() {
        const result = this.props.result;
        return (
            <div className="modal-background smooth-appear full-page-background" onClick={this.props.closePopup}>
                <div className="modal-popup">
                    <ResultComponent result={result} />
                </div>
            </div>
        );
    }
}

export default ModalPopup;
