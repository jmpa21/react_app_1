import { useEffect, useState } from "react"
import { peticionHTTP } from "../helpers/peticion";

export const useGif = (teams) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        peticionHTTP(teams).then(imgs => {
            
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })    
            }, 3000);
            
            
        })
    
    }, [teams]);
    
    return state;
}
