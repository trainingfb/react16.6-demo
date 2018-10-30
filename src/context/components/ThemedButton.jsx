import React from 'react';
import ThemeContext from './theme-context';

export default class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const cls = `btn btn-${theme}`
          return <button className={cls}> Theme Button 16.3</button>}
        }
      </ThemeContext.Consumer>
    );
  }
}

// doc: https://reactjs.org/blog/2018/03/29/react-v-16-3.html