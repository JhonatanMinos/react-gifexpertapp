import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGif } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="card animate_animated animate__fadeIn">{ category }</h3>
            { loading && <p className="card animate_animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
