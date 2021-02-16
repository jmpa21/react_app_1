import React from 'react'

export const GifGridItem = ({url, title}) => {
    return (
        <div>
            <img src = {url} alt = {title}/>
        </div>
    )
}
