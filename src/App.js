import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Apply from "./components/Employee/Apply/Apply";
import Jobs from "./components/Employee/Jobs/Jobs";
import YourJobs from "./components/Employee/YourJobs/YourJobs";
import Applicants from "./components/Employer/Applicants/Applicants";
import MakeAdmin from "./components/Employer/MakeAdmin/MakeAdmin";
import ManageJobs from "./components/Employer/ManageJobs/ManageJobs";
import CreateUpdateJob from "./components/Employer/PostJobs/CreateUpdateJob";
import ViewJobs from "./components/Employer/ViewJobs/ViewJobs";
import Home from "./components/Home/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Shared/Login/Login";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import './App.scss';

export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/createJob">
              <CreateUpdateJob />
            </PrivateRoute>
            <PrivateRoute path="/update/:id">
              <CreateUpdateJob />
            </PrivateRoute>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <PrivateRoute path="/job/:id">
              <Apply />
            </PrivateRoute>
            <PrivateRoute path="/applicant/:id">
              <Applicants />
            </PrivateRoute>
            <PrivateRoute path="/viewJobs">
              <ViewJobs />
            </PrivateRoute>
            <PrivateRoute path="/manageJobs">
              <ManageJobs />
            </PrivateRoute>
            <PrivateRoute path="/yourJobs">
              <YourJobs />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
