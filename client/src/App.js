import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
