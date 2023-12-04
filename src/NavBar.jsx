import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning bg-gradient text-white p-3">
      <a className="navbar-brand" href="App">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active mr-3">
          <a class="nav-link" href="App">Home <span class="sr-only">(current)</span></a> 
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item mr-3">
            <Link to="/state">Simple State</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/form">Controlled Form</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/users">Users</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/effect">effect</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/childtoparent">Child to parent</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/ui-library">UI Library</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/graphs">Graphs</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/graph-api">Graphs from api</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/ui-harika">UI harika</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/Graph">Graph</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/context-component">Context Component</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/reduxComponents">ReduxComponents</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/datagrid">DataGrid</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/chart">Chart</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/labalstyling">LabelStyling</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/addpostform">AddPostForm</Link>
          </li>
          <li className="nav-item dropdown mr-3">
            <Link to="/postslist">PostsList</Link>
          </li>
          {/*<li className="nav-item dropdown mr-3">
            <Link to="/app1">App1</Link>
  </li>*/}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;