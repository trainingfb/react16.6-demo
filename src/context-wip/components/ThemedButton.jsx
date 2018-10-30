import React from 'react';
import { ThemeContext } from './ThemeContext';

export class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          return <button style={{ background: theme}}> Hello</button>}
        }
      </ThemeContext.Consumer>
    );
  }
}

// doc: https://reactjs.org/blog/2018/03/29/react-v-16-3.html