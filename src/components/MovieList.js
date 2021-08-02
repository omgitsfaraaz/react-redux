import React from 'react';
import Movies from './Movies';
import moviesData from './moviesData';

function MovieList() {
    console.log(moviesData);
    return (
        <div>
            {moviesData.map((data) => <Movies key={data.sname} title={data.title} sname={data.sname} />)}
        </div>
    )
}

export default MovieList
