import React, { Component } from 'react';

class Move extends Component {
  render() {
    const moveType = this.props.type;
    return (
      <div className="Move">
        <input
          type="button"
          name={moveType}
          onClick={e => this.props.onMoveClicked(moveType)}
        />
      </div>
    );
  }
}

export default Move;
