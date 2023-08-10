import HolaMundo from "./HolaMundo";

const NombreEdad = (nombre, edad) => `
    <div>
        <div>
            ${HolaMundo(nombre)}
        </div>
        <div>
            <p>La edad de ${nombre} es ${edad}</p>
        </div>
    </div>
`

export default NombreEdad