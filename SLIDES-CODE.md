## `memo`

```javascript
import React from 'react';

export const Panel1 = props => <h1>Value: {props.val}</h1>;
export const Panel2 = React.memo(Panel1);
```

---

## `lazy`

```javascript
import React from 'react';
const Demo1 = React.lazy(() => import ('./Demo1'));
const Demo2 = React.lazy(() => import ('./Demo2'));
```

```javascript
<BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <div className="container">
      <Route path="/demo1" component={() => <Demo1 />} />
      <Route path="/demo2" component={() => <Demo2/> } />
      }} />
    </div>
  </Suspense>
</BrowserRouter>
```
```javascript
render() {
  return {
    {this.state.show ? <Suspense fallback={<div>Loading</div>}>
      <AnyComponent />
    </Suspense> : null }
  }
}
```

---

## `createRef`

```javascript
import React from 'react';

export default class Demo extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  submit = () => {
    if (!this.inputRef.current.value) { return; }
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <input type="text ref={this.inputRef} />
        <button onClick={this.submit}>Submit</button>
      </>
    )
  }
}
```

## `getDerivedStateFromProps`

```javascript
<List list={users} />
```

```javascript
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
      <input type="number" value={age} onChange={this.onChange} />
      { filteredList.map(u => <ListItem key={u.id} item={u} />) }
    </React.Fragment>
  }
}
```

## `context`

```javascript
export default React.createContext('primary');
```

```javascript
<ThemeContext.Provider value={"warning"}>
  <ThemedButton />
</ThemeContext.Provider>
```

## `context` (React 16.3)

```javascript
<ThemeContext.Consumer>
  {theme => {
    const cls = `btn btn-${theme}`
    return <button className={cls}>Save</button>}
  }
</ThemeContext.Consumer>
```

## `context` (React 16.6)

```javascript
static contextType = ThemeContext;
// ...
const cls = `btn btn-${this.context}`;
<button className={cls}>Save</button>
```


## Error Boundaries

```javascript
<ErrorBoundary>
  <AnyComponent {...this.props}/>
</ErrorBoundary>
```

#### React 16.3

```javascript
export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

#### React 16.6

```javascript
export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```


## `memo`

```javascript
```

