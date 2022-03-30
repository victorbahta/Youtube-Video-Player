import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <App />;
  }
}
ReactDOM.render(<Main />, document.querySelector("#root"));
