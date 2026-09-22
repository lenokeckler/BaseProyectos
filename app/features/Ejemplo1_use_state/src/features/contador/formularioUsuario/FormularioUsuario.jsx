import { CONTADOR_TEXT } from "../constants/constants.contants";
import useUsuario from "../hooks/useUsuario";

export function FormularioUsuario({setCount}) {

    const { nombre, edad, handleNombre, handleEdad, handleAgregar } = useUsuario(setCount);

    return (
        <>
            <h2>{CONTADOR_TEXT.TITULO_USUARIO}</h2>

            <label htmlFor="nombre">{CONTADOR_TEXT.NOMBRE}</label>
            <input
                id="nombre"
                type="text"
                placeholder={CONTADOR_TEXT.NOMBRE}
                value={nombre}
                onChange={handleNombre}
            />

            <label htmlFor="edad">{CONTADOR_TEXT.EDAD}</label>
            <input
                id="edad"
                type="number"
                placeholder={CONTADOR_TEXT.EDAD}
                value={edad}
                onChange={handleEdad}
            />

            <button onClick={handleAgregar} disabled={nombre === "" || edad === ""}>
                {CONTADOR_TEXT.AGREGAR}
            </button>
        </>
    )
}
