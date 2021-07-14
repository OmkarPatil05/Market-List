import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
        <Navbar />
        <div className="content">
              <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route path='/about'>
                      <About />
                  </Route>
              </Switch>
        </div>
    </Router>
  );
}

export default App;
