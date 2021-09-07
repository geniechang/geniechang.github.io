import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import IncidentTrackingApp from "./IncidentTrackingApp";
import ScrollToTop from "./ScrollToTop";
import VoucherApplicationRedesign from "./VoucherApplicationRedesign";

export default function App() {
  return (
    <div className="App-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects/incident-tracking-app">
            <ScrollToTop />
            <IncidentTrackingApp />
          </Route>
          <Route path="/projects/voucher-application-redesign">
            <ScrollToTop />
            <VoucherApplicationRedesign />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
