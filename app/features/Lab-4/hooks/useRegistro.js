function useRegistro(setParticipantes) {
    function handleAgregarParticipante(nombre) {
        setParticipantes(prev => [...prev, nombre]);
    }
    return { handleAgregarParticipante };
}

export default useRegistro;
