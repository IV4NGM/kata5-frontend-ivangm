import { useState } from "react";
import Tarea from "./Tarea";
import GuadarCambios from "./GuardarCambios";

const ListaTareas = (props) => {
  const [contador, setContador] = useState(0);
  // El 0 de useState es porque queremos que el contador inicie en 0
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [tareaModificada, setTareaModificada] = useState("");
  const [indexTareaModificada, setIndexTareaModificada] = useState(0);

  const agregarTarea = () => {
    setContador(contador + 1);
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (indexTareaABorrar) => {
    setTareas(tareas.filter((tareaTexto, i) => i != indexTareaABorrar));
    setContador(contador - 1);
  };

  const modificarTarea = (indexTareaAModificar) => {
    setTareaModificada(tareas[indexTareaAModificar]);
    setIndexTareaModificada(indexTareaAModificar);
  };
  const guardarCambios = (indexTareaAModificar) => {
    setTareas(
      tareas.map((tareaTexto, i) => {
        if (i == indexTareaAModificar) {
          tareaTexto = tareaModificada;
        }
        return tareaTexto;
      })
    );
  };

  return (
    <>
      <>
        <h1> Lista de tareas</h1>
        <label> Tarea nueva:</label>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(event) => {
            setNuevaTarea(event.target.value);
          }}
        />
        <button onClick={agregarTarea}>Agregar tarea</button>

        <p>Contador: {contador} </p>
        <ul>
          {tareas.map((tareaTexto, index) => {
            return (
              <Tarea
                key={index}
                nombreTarea={tareaTexto}
                modificarTarea={() => modificarTarea(index)}
                eliminarTarea={() => eliminarTarea(index)}
              />
            );
          })}
        </ul>

        <input
          type="text"
          value={tareaModificada}
          onChange={(event) => {
            setTareaModificada(event.target.value);
          }}
        />
      </>
      <GuadarCambios
        indexTareaModificar={indexTareaModificada}
        guardarCambios={() => guardarCambios(indexTareaModificada)}
      />
    </>
  );
};

export default ListaTareas;
