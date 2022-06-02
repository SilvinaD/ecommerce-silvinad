import './App.css';
import NavBar from './components/NavBar/NavBar';
//import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  //Todo lo que se ve en pantalla - JS parecido a html - Dif claseName y cierre /
  return (
   <>
      <NavBar/>
      {/* <Cuerpo/> */}
      <ItemListContainer greeting='Bienvenidos !!!!!'/>
   </>
  );
}

export default App;
