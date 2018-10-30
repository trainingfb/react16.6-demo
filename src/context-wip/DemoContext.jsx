import React, { Component, Suspense } from 'react';
import { ThemedButton } from './components/ThemedButton';
import ThemedButtonNew  from './components/ThemedButtonNew';
import { ThemeContext } from './components/ThemeContext';

// export const ThemeContext = React.createContext('green');

class Theme extends React.Component {
  state = { color: 'orange'};

  changeColor = (color) => {
      this.setState({color})
  };

  getData() {
    return {changeColor: this.changeColor, color: this.state.color}
  }

  render() {
    return (
      <ThemeContext.Provider value={this.getData()}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

class DemoContext extends Component {
  render() {
    return (
      <div>
        <Theme>
            <Page />
        </Theme>
      </div>
    );
  }
}

class Page extends Component {
  onChangeTheme() {

  }
  render() {
    return (
      <div>
            <ThemedButtonNew />
      </div>
    );
  }
}

export default DemoContext;
