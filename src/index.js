import React from "react";
import ReactDOM from "react-dom";


const App = () => (
  <div className="page">
    <p>Hello World</p>
  </div>
);

App.proptypes = {};

ReactDOM.render(<App />, document.getElementById("app"));
