import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

export default class ThemedButtonNew extends Component {
  onClickHandler() {
    this.context.changeColor('black')
  }
  render() {
    return (
      <button
        onClick={this.onClickHandler.bind(this)}
        style={{ background: this.context.color}}>
        Hello
      </button>
    );
  }
}
ThemedButtonNew.contextType = ThemeContext;

// doc: https://reactjs.org/docs/context.html