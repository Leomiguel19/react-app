import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
//import Peliculas from './components/Peliculas';
import Router from './Router';

function App() {
  let buttonString = "Ver más";

  return (
    <div className="App">
      <Header />
      <Slider 
        title="Bienvenido a mi primera app con React" 
        btn={buttonString} 
      />

      <div className="center">

        <Router/>
        {/* <Peliculas /> */}
        <Sidebar />

        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
