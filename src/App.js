import React, { Component } from "react";
import MovieList from "./MovieList";
import pic1 from "./MoviesPics/1.jpg";
import pic2 from "./MoviesPics/2.jpg";

class App extends Component {
  state = {
    movies : [
      {
        id: 1,
        title:"DreamWorks Spirit 2021",
        description:"Free-spirited Lucky Prescott moves to Miradero to join her estranged father.",
        posterURL:{pic1},
        rating:"10"
      },
      {
        id: 2,
        title:"Fast & furious 9",
        description:"This time, that threat will force Dom to confront the sins of his past if he's going to save those he loves most.",
        posterURL:{pic2},
        rating:"20"}
    ]

  }
  
  render() { return(
  <div>
    <h1>Movies app</h1>
    <MovieList movies={this.state.movies} />
  </div>
  );}
};

export default App;
