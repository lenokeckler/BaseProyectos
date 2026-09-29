import { useState } from "react";
import { REGISTRO_TEXT } from "../constants/registro.constants";
import useRegistro from "./useRegistro";

function useFormularioParticipante(setParticipantes) {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");
    const { handleAgregarParticipante } = useRegistro(setParticipantes);

    function handleNombre(event) {
        setNombre(event.target.value);
        setError("");
    }

    function handleRegistrar() {
        const nombreLimpio = nombre.trim();
        if (!nombreLimpio) {
            setError(REGISTRO_TEXT.NOMBRE_VACIO);
            return;
        }
        handleAgregarParticipante(nombreLimpio);
        setNombre("");
    }

    return { nombre, error, handleNombre, handleRegistrar };
}

export default useFormularioParticipante;
