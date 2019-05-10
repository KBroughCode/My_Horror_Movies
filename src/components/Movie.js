import React from 'react';

const Movie = (props) => {

  return(
    <div>
      <img src = {this.props.movie.poster_path} alt="movie poster"/>
      <h1>{this.props.movie.title}</h1>
      <p>{this.props.movie.overview}</p>
    </div>
  );
}

export default Movie
