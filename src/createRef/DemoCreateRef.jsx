import React from 'react';

export default class DemoCreateRef extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  submit = () => {
    alert(this.inputRef.current.value);
    this.inputRef.current.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

