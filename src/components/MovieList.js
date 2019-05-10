import React, { Component } from 'react';
import Movie from '../components/Movie';

class MovieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({selectIndex: event.target.value})
    this.props.handleSelectedMovie(event.target.value)
  }

  createList(){
    return this.props.horrorMovieData.map((movie, index)=>{
      return <option key={index} value={index}>{movie.title}</option>
    });
  }


  render(){
    return(
      <>
        <select value = {this.state.selectedIndex} onChange = {this.handleChange}>
        {this.createList()}
        </select>
        <Movie />
      </>
    )
  }

}

export default MovieList
