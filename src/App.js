import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function HelloWorld(name, age) {
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
      <Header />
      <Slider />
      
      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi there! Welcome to mi first project in reactttt
          </p>

          {HelloWorld(name, 22)}


          <section className="components">
            <MiComponente />
            <Peliculas />
          </section>
        </section>

        <Sidebar/>
      
      <div className="clearfix"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
