import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import MovieItems from './movieitems/MovieItems.jsx';
// import { movie_list } from '../../assets/assets.js';
import './MovieDisplay.css';

const MovieDisplay = ({ category }) => {
    const { movie_list } = useContext(StoreContext);

    return (
        <div className='movie-display' id='food-display'>
            <h2>Latest Movies</h2>
            <div className='movie-display-list'>
                {movie_list.map((item, index) => {
                    {if (category === 'everything' || category === item.category) {
                        return <MovieItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />;
                    }}
                    // return null;
                })}
            </div>

            {/* <h2>All Movies</h2>
            <div className='movie-display-list'>
                {movie_list.map((item, index) => (
                    <MovieItems key={`all-${index}`} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div> */}

            {/* {category} */}
        </div>
    );
};

export default MovieDisplay;