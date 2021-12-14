import './App.css';
import Inicio from "./views/inicio";
import Donde from "./views/donde";
import Nosotros from "./views/nosotros";
import ConfirmarAsistencia from "./views/confirmarAsistencia";
import ListaRegalos from "./views/listaRegalos";
import Padres from "./views/padres";
import Nav from "./views/nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Inicio></Inicio>
      <Padres></Padres>
      <Donde></Donde>
      <Nosotros></Nosotros>
      <ListaRegalos></ListaRegalos>
      <ConfirmarAsistencia></ConfirmarAsistencia>
    </div>
  );
}

export default App;


