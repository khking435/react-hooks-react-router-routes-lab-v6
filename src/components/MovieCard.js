import {Link} from 'react-router-dom';
import React from 'react';

function MovieCard({movie}) {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;