import React from 'react';
import NavLink from "react-router-dom/es/NavLink";

export default () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark text-white mb-2">
      <NavLink className="navbar-brand"
               exact to="/"
               activeClassName="text-warning">Hello React</NavLink>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/memo" activeClassName="text-warning">Memo</NavLink>
          <NavLink className="nav-item nav-link" to="/lazy" activeClassName="text-warning">Lazy</NavLink>
          <NavLink className="nav-item nav-link" to="/context" activeClassName="text-warning">Context API</NavLink>
          <NavLink className="nav-item nav-link" to="/create-ref" activeClassName="text-warning">CreateRef</NavLink>
          <NavLink className="nav-item nav-link" to="/derived-state" activeClassName="text-warning">Derived State</NavLink>
          <NavLink className="nav-item nav-link" to="/error-boundaries" activeClassName="text-warning">Error Boundaries</NavLink>
        </ul>
      </div>
    </nav>
  )
};

