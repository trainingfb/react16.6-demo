import React, { Component, Suspense } from 'react';

const Image1 = React.lazy(() => import ('./components/Image'))
const Image2 = React.lazy(() => import ('./components/Image2'))

export default class DemoLazy extends Component {
  constructor() {
    super();
    this.state = { one: false, two: false }
  }

  toggleVisibility(component) {
    this.setState(state => {
      return {
        [component]: !state[component]
      }
    })
  }

  render() {
    const { one, two } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col" />
          <div className="col">
            <h1>Lazy / Suspense (load components)</h1>

            <div className="btn-group">
              <button className="btn btn-outline-primary" onClick={() => this.toggleVisibility('one')}>Load 1</button>
              <button className="btn btn-outline-primary" onClick={() => this.toggleVisibility('two')}>Load 2</button>
            </div>
            <hr/>
            <Suspense fallback={<div>Loading</div>}>
              {one ? <Image1 /> : null}
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
              {two ? <Image2 /> : null}
            </Suspense>

          </div>
          <div className="col" />
        </div>


      </div>
    );
  }
}
