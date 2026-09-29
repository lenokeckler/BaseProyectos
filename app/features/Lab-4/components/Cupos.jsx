import { REGISTRO_TEXT, CAPACIDAD, COLORES } from "../constants/registro.constants";

export function Cupos({ participantes }) {
    const registrados = participantes.length;
    const disponibles = CAPACIDAD - registrados;
    const lleno = disponibles <= 0;

    return (
        <>
            <h2>{REGISTRO_TEXT.TITULO_CUPOS}</h2>
            <p>{REGISTRO_TEXT.REGISTRADOS} {registrados}</p>
            <p>{REGISTRO_TEXT.DISPONIBLES} {disponibles}</p>
            <p style={{ color: lleno ? COLORES.LLENO : COLORES.DISPONIBLE }}>{lleno ? REGISTRO_TEXT.LLENO : REGISTRO_TEXT.HAY_CUPOS}</p>
        </>
    );
}

