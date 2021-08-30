import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import NavBar from './components/NavBar';
import EndBar from "./components/EndBar.jsx";
import Contacto from './components/pages/Contacto';
import Vender from './components/pages/Vender';
import Rentar from './components/pages/Rentar';
import Conocenos from './components/pages/Conocenos';
import Conocenos2 from './components/pages/Conocenos2';
import Conocenos3 from './components/pages/Conocenos3';
import Conocenos4 from './components/pages/Conocenos4';
import Oportunidades from './components/pages/Oportunidades';
import Whatsapp from './components/Whatsapp';
import Propiedad from './components/pages/Propiedad';
import Subir from './components/pages/Subir';
import Catalogo from './components/pages/Catalogo';
import Borrar from './components/pages/Borrar'
import PruebaTendencias from './components/pages/PruebaTendencias'
import VerMas from './components/pages/VerMas';
import Articulo1 from './components/pages/Articulo1';



function App() {
  return (
    <Router>
    <div className="App"> 
      <Whatsapp/>
      <NavBar/>
      <Switch>
        <Route exact path="/oportunidades" component={Oportunidades}/>
        <Route exact path="/prueba" component={PruebaTendencias}/>
        <Route exact path="/rentar" component={Rentar}/>
        <Route exact path="/comprar" component={Catalogo}/>
        <Route exact path="/comprar/:id" component={Propiedad}/>
        <Route exact path="/comprar/:id/borrar" component={Borrar}/>
        <Route exact path="/comprar/:id/ver-mas" component={VerMas}/>
        <Route exact path="/subir" component={Subir}/>
        <Route exact path="/vender" component={Vender}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/conocenos" component={Conocenos}/>
        <Route exact path="/conocenos2" component={Conocenos2}/>
        <Route exact path="/conocenos3" component={Conocenos3}/>
        <Route exact path="/conocenos4" component={Conocenos4}/>
        <Route exact path="/Articulo1" component={Articulo1}/>
        <Route exact path="/" component={Home}/>
        

    
      </Switch>
      
       <EndBar />
    </div>
    </Router>
  );
}

export default App;
