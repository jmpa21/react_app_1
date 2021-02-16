import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const App = () => {
    const [equipos, setEquipos] = useState([]);
    
    
    return (
        <div>
            <h1>Ingresa un nombre en el campo de texto</h1>
            <AddCategory setEquipos = {setEquipos}/>
            <ul>
                {
                    equipos.map(teams => 
                        <GifGrid
                            key = {teams}
                            teams = {teams}
                        />
                        )
                }
            </ul>
        </div>
    )
}
