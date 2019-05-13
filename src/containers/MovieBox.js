import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import Movie from '../components/Movie';
/*import MovieCards from '../components/MovieCards';*/

class MovieBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      horrorMovieData: [],
      selectedIndex: null
    }

    this.handleSelectedMovie = this.handleSelectedMovie.bind(this)

  }

  handleSelectedMovie(index){
    this.setState({selectedIndex: index})
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=7d3e845db540f98644e7c1372630e825&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=true&page=1&with_genres=27")
    .then(res => res.json())
    .then(data => {
      this.setState({horrorMovieData: data.results})
    })
  }



  createMovie(){
    if (this.state.selectedIndex){
      return <Movie movie ={this.state.horrorMovieData[this.state.selectedIndex]} className = "card"/>
    } else {
      return <h3>Select a Movie</h3>
    }
  }

  render(){
    console.log(this.state.horrorMovieData);
    return (
      <>
      <MovieList
      className = "list"
        horrorMovieData = {this.state.horrorMovieData}
        handleSelectedMovie = {this.handleSelectedMovie}
        />
        {this.createMovie()}
      </>
    );
  }
}

export default MovieBox
