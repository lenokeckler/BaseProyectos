import { REGISTRO_TEXT } from "../constants/registro.constants";

export function ListaParticipantes({ participantes }) {
    return (
        <>
            <h2>{REGISTRO_TEXT.TITULO_LISTA}</h2>
            {participantes.length === 0 ? (
                <p>{REGISTRO_TEXT.SIN_PARTICIPANTES}</p>
            ) : (
                <ul>
                    {participantes.map((participante, index) => (
                        <li key={index}>{participante}</li>
                    ))}
                </ul>
            )}
        </>
    );
}
