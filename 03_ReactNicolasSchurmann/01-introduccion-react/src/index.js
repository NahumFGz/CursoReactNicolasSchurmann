import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ! Donde lo deseamos renderizar
const root = ReactDOM.createRoot(document.getElementById('root'));

// ! Lo que queremos renderizar
// root.render('lala');

// ! <p>hola mundo</p>
// * Es poco reutilizable
// const x = React.createElement('p', null, 'hola mundo');

// * Parece HTML pero es JSX
// root.render(<p>hola mundo</p>);

// * Una manera de guardar el JSX en una variable
// const x = <p>hola mundo</p>
// root.render(x);

// * Se puede crear una función, pero para mostrarla se necesita jsx
// * El jsx reemplaza React.createElement()
// const X = () => <p>hola mundo</p>;
// root.render(<X />);

// ! Trabajemos creando un componente un poco más complejo
// const X = () => (
//   <ul>
//     <li>Chanchito feliz</li>
//     <li>Chanchito triste</li>
//     <li>Chanchito emocionado</li>
//   </ul>
// )

// * El anterior se puede refactorizar para mostrar elementos dinámicos
// * children es un prop especial que se puede usar para mostrar elementos dinámicos
const Li = ({children, estado, casa,edad}) => {
  console.log(casa, edad);
  return (
        <li>{children} estoy {estado}</li>
        )
}
const X = () => (
  <ul>
    {/* Con Li se para el children --> */}
    <Li>Chanchito feliz</Li>
    {/* Tambien lo podemos pasar una propiedad */}
    <Li estado={'triste!'}>Chanchito</Li>
    {/* Puedo poner más  propiedades*/}
    <Li
      estado={'emocionado!'}
      casa={false}
      edad={24}
    >
      Chanchito
    </Li>

    <li>Chanchito emocionado</li>
  </ul>
)
root.render(<X />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
