// import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Signin } from './Components/Signin';
import { About } from './Components/About';
import { Home } from './Components/Home';
import  Drag  from './Components/Drag';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="eTour Goa" searchBar={true} />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/drag">
            <Drag />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
