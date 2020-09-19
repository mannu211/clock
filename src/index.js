import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Clock title="Los Angeles,California" datediff={+1} />
      <Clock title="London" datediff={-2} />
      <Clock title="New York" datediff={-6} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
