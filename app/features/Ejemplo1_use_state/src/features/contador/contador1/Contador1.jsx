import { CONTADOR_TEXT } from "../constants/constants.contants";
import useContador from "../hooks/useContador";

export function  Contador1({count, setCount}) {

    const { handleIncrement, handleDecrement } = useContador(setCount);

    return (
        <>
            <h2>Contador1</h2>
            <p>{count}</p>
            <button onClick={count < 5 && handleIncrement}>{CONTADOR_TEXT.INCREMENTAR}</button>
            <button onClick={count > 0? handleDecrement : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}