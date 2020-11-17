import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   return movieData.map((a,b) =>
      // console.log(a, "a")
      <MovieCard 
      key={b} 
      title={a.title}
      genres={a.genres}
      IMDBRating={a.IMDBRating}
      poster={a.poster}
      />
      )
    // map over your movieData array and return an array of the correct JSX
  };
  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
