import React, { Component } from 'react';
import Panel, { Panel2 } from './components/Panels';

class DemoMemo extends Component {
  timer;
  constructor() {
    super()
    this.state = { value: null}
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ value: 'hello' })
    }, 1000)
  }

  render() {
    return (
      <div className="App" style={{ width: 400}}>
        {this.state.value}
        <div className="row">
          <div className="col">
            <Panel val={this.state.value}></Panel>
          </div>
          <div className="col">
            <Panel2 val={this.state.value}></Panel2>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default DemoMemo;
