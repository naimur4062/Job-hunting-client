import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Apply from "./components/Employee/Apply/Apply";
import Jobs from "./components/Employee/Jobs/Jobs";
import Admin from "./components/Employer/Admin/Admin";
import PostJobs from "./components/Employer/PostJobs/PostJobs";
import ViewJobs from "./components/Employer/ViewJobs/ViewJobs";
import Home from "./components/Home/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";
import Login from "./components/Shared/Login/Login";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
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
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/postJobs">
            <PostJobs />
          </Route>
          <PrivateRoute path="/jobs">
            <Jobs />
          </PrivateRoute>
          <Route path="/job/:id">
            <Apply />
          </Route>
          <Route path="/viewJobs">
            <ViewJobs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
