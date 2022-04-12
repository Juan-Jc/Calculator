import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import '../hojas-de-estilo/Boton-Clear.css'

const BotonClear = (props) => (
    <div className='boton-clear'
        onClick={props.manejarClear}>
    {props.children}
    </div>
)

export default BotonClear;