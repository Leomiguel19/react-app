import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function HelloWorld(name, age){
  let presentation = (
    <div>
      <h2>Hi, i'm {name}</h2>
      <h2>i'm {age} years old</h2>
    </div>
  );
  return presentation;
}

function App() {
  let name = "Leonardo Guilarte";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there! Welcome to mi first project in react
        </p>
        
        {HelloWorld(name, 22)}        

      
        <section className="components">
          <MiComponente/>   
          <Peliculas/>       
        </section>
        
      </header>
    </div>
  );
}

export default App;
