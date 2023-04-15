/* 7️⃣ ***COMPONENTE FutbolistaCard*** 7️⃣

Implementar el componente FutbolistaCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un jugador específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/
import './futbolistaCard.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from './../../redux/actions/index';
import { Link } from "react-router-dom";


const FutbolistaCard = ({
   id,
   name,
   pais,
   posicion,
   descripcion,
   numeroCamiseta,
   imagen,
   nacimiento,

}) => {
   const dispatch = useDispatch();
   return <div className='card'>
      <button onClick={() => dispatch(action.deleteFutbolista(id))}>x</button>
      <Link to={`/futbolistas/${id}`}>
      <h3>{name}</h3>
       </Link>
       <img src={imagen} alt={name} />
       <ul>
         
         <li>{posicion}</li>
         <li>{numeroCamiseta}</li>
         <li>{nacimiento}</li>
       </ul>
       
       <p>Pais: {pais}</p>

   </div>;
};


export default FutbolistaCard;
