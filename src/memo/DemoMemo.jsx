import React, { Component } from 'react';
import Panel, { Panel2 } from './components/Panels';

class DemoMemo extends Component {
  timer;
  state = { value: null}

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ value: 'hello' })
    }, 1000)
  }

  render() {
    return (
      <div>
        <h3>{this.state.value}</h3>
        <div className="row">
          <div className="col">
            <pre>no memo</pre>
            <Panel val={this.state.value} />
          </div>
          <div className="col">
            <pre>with memo</pre>
            <Panel2 val={this.state.value} />
          </div>
        </div>
        <pre>Open React Dev Tools to check renders</pre>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default DemoMemo;
