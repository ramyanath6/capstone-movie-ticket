import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext.jsx'
import MovieItems from './movieitems/MovieItems.jsx'
import { movie_list } from '../../assets/assets.js'
import './MovieDisplay.css'

const MovieDisplay = ({category}) => {

    const { movie_item } = useContext(StoreContext)
    return (
        <div className='movie-display'>
            <h2>Latest Movies</h2>
            <div className='movie-display-list'>
                {movie_list.map((item,index)=>{
                    if(category==='everything'|| category===item.category){

                    return <MovieItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                }})}
            </div>
            {/* {category} */}
            
        </div>
    )
}

export default MovieDisplay
