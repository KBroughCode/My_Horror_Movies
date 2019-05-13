import React, { Component } from 'react';

class Movie extends Component{
  constructor(props){
    super();
    this.state ={
      recommended:[]
    }
  }

  getRecommendations(){
    const recomData = 'https://api.themoviedb.org/3/movie/532671/recommendations?page=1&language=en-US&api_key=7d3e845db540f98644e7c1372630e825'
      return recomData
    console.log(recomData);
  }
  render(){
    if(!this.props.movie){
      return <div>...loading</div>
    }else{
  return(
  <div className ="card-display">
    <div className = "movieCardContainer">
      <img className = "movie-poster" src = {`http://image.tmdb.org/t/p/w400/${this.props.movie.backdrop_path}`} alt="movie poster" />
      <div className = "movie-info">
        <h1 className = "movie-title">{this.props.movie.title}</h1>
        <p className = "movie-overview">{this.props.movie.overview}</p>
      </div>
      <h1 className = "movie-rating">Rating {this.props.movie.vote_average}/10</h1>
      <div className = "recommendation">
        <h3 className = "movie-recommends-header">You Might Also Like</h3>
        <p className = "movie-recommends">{"https://api.themoviedb.org/3/movie/532671/similar?api_key=7d3e845db540f98644e7c1372630e825&language=en-US&page=1"}</p>
      </div>
      <button className = "ui orange button" type="submit">Add To My List</button>
    </div>
  </div>
    );
    }
  }
}

export default Movie
