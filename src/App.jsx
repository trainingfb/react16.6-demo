import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import NavBar from './NavBar';

const DemoLazy = lazy(() => import ('./lazy/DemoLazy'));
const DemoMemo = lazy(() => import ('./memo/DemoMemo'));
const DemoContext = lazy(() => import ('./context/DemoContext'));
const DemoErrorBoundaries = lazy(() => import ('./error_boundaries/DemoErrorBoundaries'));
const DemoCreateRef = lazy(() => import ('./createRef/DemoCreateRef'));
const DemoGetDerivedState = lazy(() => import ('./getDerivedStateFromProps/DemoGetDerivedState'));

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <div className="container">
              <Route path="/lazy" component={() => <DemoLazy />} />
              <Route path="/memo" component={() => <DemoMemo /> } />
              <Route path="/context" component={() => <DemoContext /> } />
              <Route path="/create-ref" component={() => <DemoCreateRef /> } />
              <Route path="/derived-state" component={() => <DemoGetDerivedState /> } />
              <Route path="/error-boundaries" component={() => <DemoErrorBoundaries /> } />
              <Route exact path='' render={() => {
                return <Redirect exact from='/' to='/lazy'/>
              }} />
            </div>
          </Suspense>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
