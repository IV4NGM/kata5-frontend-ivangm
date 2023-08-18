const Tarea = ({ nombreTarea, modificarTarea, eliminarTarea }) => {
  return (
    <>
      <li>
        {nombreTarea} <button onClick={modificarTarea}>Modificar tarea</button>{" "}
        <button onClick={eliminarTarea}>Eliminar tarea</button>
      </li>
    </>
  );
};

export default Tarea;
