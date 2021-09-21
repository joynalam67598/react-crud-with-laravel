import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddStudent from "./components/pages/AddStudent";
import Student from "./components/pages/Student";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Student} />
        <Route exact path="/addStudent" component={AddStudent} />
      </Switch>
    </Router>
  );
}

export default App;
