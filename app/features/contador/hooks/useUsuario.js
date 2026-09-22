import { useState } from "react";
import useContador from "./useContador";

function useUsuario(setCount){
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    const { handleIncrement } = useContador(setCount);

    function handleNombre(event) {
        setNombre(event.target.value);
    }

    function handleEdad(event) {
        setEdad(event.target.value);
    }

    function handleAgregar() {
        handleIncrement();
        setNombre("");
        setEdad("");
    }

    return {nombre, edad, handleNombre, handleEdad, handleAgregar}
}

export default useUsuario;
