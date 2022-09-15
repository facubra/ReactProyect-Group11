import './App.css';
import Pelicula from './Pelicula';
import peliculas from './peliculas.json';
import Main from './Main';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Main/>
      break 
    case "/peliculas":
      component = peliculas.map(peli =>
        <Pelicula
          nombrePelicula={peli.nombrePelicula}
          img={peli.img}
          directorPelicula={peli.directorPelicula}
          repartoPelicula={peli.repartoPelicula}
          generoPelicula={peli.generoPelicula}
          duracionPelicula={peli.duracionPelicula}
          clasificacionPelicula={peli.clasificacionPelicula}
          sinopsisPelicula={peli.sinopsisPelicula}
          linkPelicula={peli.linkPelicula}
        ></Pelicula>)
      break
  }

  return (
    <>
    {component}
    </>
  );
}

export default App;