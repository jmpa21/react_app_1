import React  from 'react'
import { useGif } from '../hooks/useGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({teams}) => {
    
    
    const {data:nuevo, loading} = useGif(teams);
    
    return (
        <div>
            {teams}
            {loading && <p>Cargando...</p>}
            {
                nuevo.map(img => 
                    <GifGridItem
                        key = {img}
                        {...img}
                    />
                    )
            }
        </div>
    )
}
