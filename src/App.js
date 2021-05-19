import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Apply from "./components/Employee/Apply/Apply";
import Jobs from "./components/Employee/Jobs/Jobs";
import Admin from "./components/Employer/Admin/Admin";
import ViewJobs from "./components/Employer/ViewJobs/ViewJobs";
import Home from "./components/Home/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";


function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/postJobs">
          <Admin />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/job/:id">
          <Apply />
        </Route>
        <Route path="/viewJobs">
          <ViewJobs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
