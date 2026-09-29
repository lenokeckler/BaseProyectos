import { REGISTRO_TEXT, CAPACIDAD, COLORES } from "../constants/registro.constants";
import useFormularioParticipante from "../hooks/useFormularioParticipante";

export function FormularioParticipante({ participantes, setParticipantes }) {
    const { nombre, error, handleNombre, handleRegistrar } = useFormularioParticipante(setParticipantes);
    const lleno = participantes.length >= CAPACIDAD;
    const mensaje = lleno ? REGISTRO_TEXT.SIN_CUPO : error;

    return (
        <>
            <h2>{REGISTRO_TEXT.TITULO_FORMULARIO}</h2>
            <label htmlFor="nombre">{REGISTRO_TEXT.NOMBRE}</label>
            <input id="nombre" type="text" placeholder={REGISTRO_TEXT.NOMBRE} value={nombre} onChange={handleNombre} disabled={lleno} />
            <button onClick={handleRegistrar} disabled={lleno}>{REGISTRO_TEXT.REGISTRAR}</button>
            {mensaje && <p style={{ color: COLORES.LLENO }}>{mensaje}</p>}
        </>
    );
}


