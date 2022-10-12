import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import IncidentTrackingApp from "./IncidentTrackingApp";
import ItsRainingRaincoatRedesign from "./ItsRainingRaincoatRedesign";
import ScrollToTop from "./ScrollToTop";
import VoucherApplicationRedesign from "./VoucherApplicationRedesign";

import "./Body.css";

export default function Body() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="fillcontent">
      <TransitionGroup>
        <CSSTransition timeout={600} classNames="Body-fade" key={location.key}>
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
            <Route path="/projects/its-raining-raincoat-redesign">
              <ScrollToTop />
              <ItsRainingRaincoatRedesign />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
