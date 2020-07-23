import React from 'react';

import './App.css';

function App() {
return (
  <div className="main">
    <h1>Todolist</h1>
    <div className="header">
      <input className="form-control" type="text" placeholder="Default input" /> 
      <button className="btn btn-primary" type="submit">add</button>
    </div>
    <ul className="ul">
      &nbsp;
      <div className="card">
        <div className="card-body">
          <input type="checkbox" />
          This is some text within a card body.
          <button className="btn btn-primary">delete</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <input type="checkbox" />
          This is some text within a card body.
          <button className="btn btn-primary">delete</button>
        </div>
      </div>
    </ul>
  </div>
)

}

export default App;
