import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import NavBar from './components/NavBar';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      {/* <Body/> */}
      <Switch>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/" component={Home}/>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
