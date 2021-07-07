import './App.css';
import Tendencias from './components/Tendencias.jsx';
import Filtro from './components/Filtro.jsx';
import Fondo from './components/Fondo.jsx';
import Testimonios from './components/Testimonios.jsx';
import Contacto from './components/Contacto.jsx';
import EndBar from './components/EndBar.jsx';
/*Mariano*/
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import TextImg from "./components/TextImg";
import BodyQuienes from "./components/BodyQuienes";
import QuienesText from "./components/QuienesText";
import Blog from "./components/Blog"
import Redes from "./components/Redes";

function App() {
  return (
    <div className="App">
    {/*Mariano*/}
      <NavBar />
      {/* <Body /> */}
      {/* <TextImg /> */}
    {/*Tony*/}
      <div className="tend-grid">
        <Fondo />
        <Tendencias />
      </div>
    {/*Mariano*/}
      <BodyQuienes />
      <QuienesText/>
    {/*Tony*/}
      <Filtro />
      <Testimonios />
    {/*Mariano*/}
      <Blog/>
      <Redes/>
    {/*Tony*/}
      <Contacto />
      <EndBar />
    </div>
  );
}

export default App;
