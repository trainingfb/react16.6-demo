import React, { Component } from 'react';
import ThemedButton  from './components/ThemedButton';
import ThemedButtonNew  from './components/ThemedButtonNew';
import ThemeContext from './components/theme-context';

class DemoContext extends Component {
  render() {
    return (
      <div>
        <ThemedButton />
        <ThemedButtonNew />

        <ThemeContext.Provider value={"warning"}>
          <ThemedButtonNew />
          <ThemedButton />
        </ThemeContext.Provider>

      </div>
    );
  }
}

export default DemoContext;
