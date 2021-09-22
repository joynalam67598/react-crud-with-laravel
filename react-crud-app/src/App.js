import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddStudent from "./components/pages/AddStudent";
import Student from "./components/pages/Student";
import EditStudent from "./components/pages/EditStudent";
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Student} />
        <Route exact path="/addStudent" component={AddStudent} />
        <Route exact path="/edit-student/:id" component={EditStudent} />
      </Switch>
    </Router>
  );
}

export default App;
