import React, { Component } from 'react';

class Btn extends Component {
  render() {
    return (
        <button onClick={this.props.onClick} style={{color: this.props.color}}>{this.props.text}</button>
    );
  }
}

export default Btn;
