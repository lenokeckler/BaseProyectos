import { useState } from "react";
import { CONTADOR_TEXT } from "./constants/constants.contants";

export function  LayoutContador() {
    const [count, setContador] = useState(0);

    function handleIncremet() {
        setContador(prev => prev + 1);
        
    }

    function handleDecrement() {
        setContador(prev => prev - 1);
    }

    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={count < 5 && handleIncremet}>{CONTADOR_TEXT.INCREMENTAR}</button>
            <button onClick={count > 0? handleDecrement : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}