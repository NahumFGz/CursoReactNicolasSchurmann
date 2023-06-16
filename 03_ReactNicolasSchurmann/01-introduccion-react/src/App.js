import logo from './logo.svg';
import './App.css';

// ! Se puede declarar como funcion o como fat arrow function
// * retorna un elemento JSX (parecido a HTML) pero tiene mas funcionalidades
// * Como pasar variables, funciones, etc
// * Para agregar estilos de CSS se usa className, no class porque es una palabra reservada de JSX y podria chocar con la clase de JS

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.1)',
}

const estilo = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({   children   }) => {
  return(
    <li style={{...estilo2,...estilo({  bg: '#333'  })}} className='clase-li'>{children}</li>
  )
}

const App = () => {
  const valor = 'Feliz'
  return (
      <ul style={estilo({ bg: '#750'})} className='clase-css'>
        <Li estado='Feliz'>valor de li</Li>
      </ul>
  );
}

// function App() {
//   return (
//     <p>Chanchito feliz</p>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
