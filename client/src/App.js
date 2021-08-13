import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Blog from "./components/pages/Blog";
import NavBar from './components/NavBar';
import Contacto from './components/pages/Contacto';
import Vender from './components/pages/Vender';
import Comprar from './components/pages/Comprar';
import Rentar from './components/pages/Rentar';
import Oportunidades from './components/pages/Oportunidades';
import Catalogo from './components/pages/Catalogo';
import EndBar from './components/EndBar';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Whatsapp/>
      {/* <Body/> */}
      <Switch>
        <Route exact path="/oportunidades" component={Oportunidades}/>
        <Route exact path="/rentar" component={Rentar}/>
        <Route exact path="/comprar" component={Catalogo}/>
        {/* <Route exact path="/comprar/:id" component={Propiedad}/>
        <Route exact path="/subirimagenesmonroy" component={Subir}/> */}
        <Route exact path="/vender" component={Vender}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/" component={Home}/>
        
      </Switch>
      
      <EndBar/>
    </div>
    </Router>
  );
}

export default App;
