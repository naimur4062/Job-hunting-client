import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Jobs from "./components/Employee/Jobs/Jobs";
import Admin from "./components/Employer/Admin/Admin";
import Home from "./components/Home/Home/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/postJobs">
          <Admin/>
        </Route>
        <Route path="/jobs">
          <Jobs/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
