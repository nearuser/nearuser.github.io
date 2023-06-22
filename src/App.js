import './App.css';
import logo from './imagenes/logo-rectagular.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
        <div className='logo-contenedor'>
          <img
            src={logo}
            className='logo'
            alt='logo del proyecto' 
          />
        </div>
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
