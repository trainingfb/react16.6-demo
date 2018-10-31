import React from 'react';
import { users } from './data';

export default class DemoGetDerivedState extends React.Component {
  state = { users: users.list1 }

  loadList(listName) {
    this.setState({ users: users[listName] })
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <button className="btn btn-outline-primary" onClick={this.loadList.bind(this, 'list1')}>List 1</button>
        <button className="btn btn-outline-primary" onClick={this.loadList.bind(this, 'list2')}>List 2</button>
        <List list={users} />
      </div>
    )
  }
}

class List extends React.Component {
  state = { age: 15, filteredList: [] };

  static getDerivedStateFromProps(props, state) {
    return {
      list: props.list,
      filteredList: props.list.filter(item => item.age > state.age)
    }
  }

  onChange = (event) => this.setState({ age: +event.target.value});

  render() {
    const { age, filteredList } = this.state;
    return <React.Fragment>
      <div>filter by age:</div>
      <input
        className="form-control text-center"
        type="number"
        min={0}
        max={50}
        step={5}
        value={age}
        onChange={this.onChange}
      />
      { filteredList.map(u => <ListItem key={u.id} item={u} />) }
      <hr/>
      Total: {filteredList.length}
    </React.Fragment>
  }
}

const ListItem = ({item: { id, name, age} }) => {
  return <li key={id}>{name} {age}</li>
}
