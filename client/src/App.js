import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import TextImg from "./components/TextImg";
import BodyQuienes from "./components/BodyQuienes";
import Prueba from "./components/Prueba";
import QuienesText from "./components/QuienesText";
import Blog from "./components/Blog"
import Redes from "./components/Redes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <TextImg />
      <Prueba />
      <BodyQuienes />
      <QuienesText/>
      <Prueba/>
      <Blog/>
      <Prueba/>
      <Redes/>
    </div>
  );
}

export default App;
