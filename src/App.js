import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

import "./App.css";

export default function App() {
  return (
    <div className="App-container">
      <Header />
      <Router>
        <Switch>
          <Route path="/projects/incident-tracking-app">
            <IncidentTrackingApp />
          </Route>
          <Route path="/projects/voucher-application-redesign">
            <VoucherApplicationRedesign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


function IncidentTrackingApp() {
  return <h2>IncidentTrackingApp</h2>;
}

function VoucherApplicationRedesign() {
  return <h2>VoucherApplicationRedesign</h2>;
}
