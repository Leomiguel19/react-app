import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

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

  return (
    <div className="App">
      <Header />
      <Slider />
      
      <div className="center">
        
        <SeccionPruebas/>
        <Sidebar/>
      
      <div className="clearfix"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
