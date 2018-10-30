import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import PanelWithError from './components/PanelWithError';

export default class DemoErrorBoundaries extends Component {
  constructor() {
    super();
    this.state = { id: 1 }
  }
  render() {
    return (
      <div>
        <ErrorBoundary>
          <PanelWithError {...this.state}/>
        </ErrorBoundary>
      </div>
    );
  }
}

