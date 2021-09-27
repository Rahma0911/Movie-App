import React, { Component } from "react";
import AddMovie from "./AddMovie";
import "./App.css"
import MovieList from "./MovieList";


class App extends Component {
  state = {
    movies : [
      {
        id: 1,
        title:"DreamWorks Spirit 2021",
        description:"Free-spirited Lucky...",
        posterURL:'1.jpg',
        rating:"3"
      },
      {
        id: 2,
        title:"Fast & furious 9",
        description:"No matter how fast...",
        posterURL:'2.jpg',
        rating:"4"},
      {
        id: 3,
        title:"The suicide squad",
        description:"Welcome to hell—a.k.a...",
        posterURL:'3.jpg',
        rating:"2"
      },
      {
        id: 4,
        title:"LUCA",
        description:"In a beautiful seaside town...",
        posterURL:'4.jpg',
        rating:"4"
      },
      {
        id: 5,
        title:"Harry Potter",
        description:"Based on the first of J.K...",
        posterURL:'5.jpg',
        rating:"5"
      },
      {
        id: 6,
        title:"Scooby-Doo!",
        description:"An original animated feature...",
        posterURL:'6.jpg',
        rating:"5"
      }
    ]

  }
  
  add = (newMovie) => {
    this.setState({
      movies : this.state.movies.concat(newMovie)
    })
  }

  render() { return(
  <div className="App">
    <header className="App-header">
      <h1>Movies app</h1>
      <MovieList movies={this.state.movies} />
      <AddMovie addMovie={(m)=>this.add(m)} />
    </header>
  </div>
  );}
};

export default App;
