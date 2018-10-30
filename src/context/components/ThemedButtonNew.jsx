import React, { Component } from 'react';
import ThemeContext from './theme-context';

export default class ThemedButtonNew extends Component {
  render() {
    const cls = `btn btn-${this.context}`
    return (
      <button className={cls}>
        Theme Button 16.6
      </button>
    );
  }
}
ThemedButtonNew.contextType = ThemeContext;

// doc: https://reactjs.org/docs/context.html