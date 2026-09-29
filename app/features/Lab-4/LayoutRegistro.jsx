import { useState } from "react";
import { REGISTRO_TEXT, PARTICIPANTES_INICIALES } from "./constants/registro.constants";
import { Cupos } from "./components/Cupos";
import { FormularioParticipante } from "./components/FormularioParticipante";
import { ListaParticipantes } from "./components/ListaParticipantes";

export function LayoutRegistro() {
    const [participantes, setParticipantes] = useState(PARTICIPANTES_INICIALES);

    return (
        <>
            <h1>{REGISTRO_TEXT.TITULO}</h1>
            <Cupos participantes={participantes} />
            <FormularioParticipante participantes={participantes} setParticipantes={setParticipantes} />
            <ListaParticipantes participantes={participantes} />
        </>
    );
}

