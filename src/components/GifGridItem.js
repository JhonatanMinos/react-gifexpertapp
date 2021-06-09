import React from 'react'

export const GifGridItem = ( { title, url } ) => {
    return (
        <div className="card animate_animated animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p> { title } </p>
        </div>
    )
}
