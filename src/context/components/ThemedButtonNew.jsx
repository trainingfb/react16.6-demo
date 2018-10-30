import React, { Component } from 'react';
import ThemeContext from './theme-context';

export default class ThemedButtonNew extends Component {
  render() {
    return (
      <button
        style={{ background: this.context}}>
        Theme Button 16.6
      </button>
    );
  }
}
ThemedButtonNew.contextType = ThemeContext;

// doc: https://reactjs.org/docs/context.html