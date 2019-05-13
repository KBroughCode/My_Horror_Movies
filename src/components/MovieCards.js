import React from 'react';
import Movie from './Movie';

const MovieCards = (props) =>{

  const cards = props.horrorMovieData.map((movie, index)=>{
    return <Movie image = {movie.poster_path} title = {movie.title} />
  })

  return(
    <div className ="cards">
      {cards}
    </div>
  );
}

export default MovieCards
