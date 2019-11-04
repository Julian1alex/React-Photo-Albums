import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Content from "./Albums";
import Main from "./Main";
import Pic from "./Pics";
import "../styles/base.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Router>
          <Route exact path="/" component={Main}/>
          <Route path="/Albums/:id" component={Content}/>
          <Route path="/Pics/:id" component={Pic}/>
        </Router>
      </div>
    );
  }
}

export default App;