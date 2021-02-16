import React, { useState } from 'react'

export const AddCategory = ({setEquipos}) => {
    const [entrada, setEntrada] = useState('');

    const enter = (e) => {
        setEntrada(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if(entrada.trim().length > 2){
            setEquipos(teams => [entrada, ...teams]);
            setEntrada("");
        }
    }

    return (
        <form onSubmit = {submit}>
            <input
                type = "text"
                value = {entrada}
                onChange = {enter}
            />
        </form>
    )
}
