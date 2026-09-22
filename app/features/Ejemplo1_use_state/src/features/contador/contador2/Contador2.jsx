import useContador from "../hooks/useContador";

export function  Contador2({count, setCount}) {

    const { handleIncrement, handleDecrement } = useContador(setCount);

    return (
        <>
            <h2>Contador2</h2>
            <p>{count}</p>
            <button onClick={handleDecrement} disabled={count <=0} > 
                Decrementar
            </button>
        </>
    )
}