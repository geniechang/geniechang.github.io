import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import IncidentTrackingApp from "./IncidentTrackingApp";
import ScrollToTop from "./ScrollToTop";
import VoucherApplicationRedesign from "./VoucherApplicationRedesign";

import "./App.css";

export default function App() {
  return (
    <div className="App-container">
      <Header />
      <Router>
        <ScrollToTop />
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
      <Footer />
    </div>
  );
}
