import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({selectedIndex: event.target.value})
    this.props.handleSelectedMovie(event.target.value)
  }

  createList(){
    return this.props.horrorMovieData.map((movie, index)=>{
      return <option key={index} value={index}>{movie.title}</option>
    });
  }


  render(){
    console.log(this.state.selectedIndex);
    return(
      <>
        <div className = "fields">
        <select value = {this.state.selectedIndex} onChange = {this.handleChange}>
        {this.createList()}
        </select>
        </div>
      </>
    )
  }

}

export default MovieList
