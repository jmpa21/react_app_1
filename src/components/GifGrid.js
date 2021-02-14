import React from 'react'
//import { peticionHTTP } from '../helpers/peticion';
import { useGif } from '../hooks/useGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({teams}) => {
    

    const {data:imagenes, loading} = useGif(teams);
    
    
    return (
        <div>
            {teams}
            {loading && <p>Caegando...</p>}
            {
                imagenes.map(img => 
                    <GifGridItem
                        key = {img}
                        {...img}
                    />
                    )
            }
        </div>
    )
}
