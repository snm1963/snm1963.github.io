import './App.css';
import React, {Component} from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Error from "./Components/Error"




class App extends Component{
render(){
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route strict exact path="/" component={Home} />
        <Route component = {Error} />
      </Switch>
    </Router>
  )
}
}
export default App;
