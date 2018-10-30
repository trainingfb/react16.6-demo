import React from 'react';

export default class PanelWithError extends React.Component {
  render() {
    return (
      <div>
        {/*This generates an exception since name is not defined */}
        hello {this.props.name.toLowerCase()}
      </div>
    )
  }
}