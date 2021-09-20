import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export default function App() {
  return (
    <div className="App-container">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}
