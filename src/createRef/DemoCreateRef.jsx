import React from 'react';

export default class DemoCreateRef extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  submit = () => {
    if (!this.inputRef.current.value) {
      alert('nothing');
      return;
    }
    alert(this.inputRef.current.value);
    this.inputRef.current.value = ''
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="write something"
          ref={this.inputRef}
          className="form-control"
        />
        <hr/>
        <button className="btn btn-outline-primary" onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

