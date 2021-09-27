import React from "react";

const MovieList = (props) => {

    return (
        <div>
            {props.movies.map((el) => (
                <div>
                    <img src={el.posterURL} alt={el.id} width="15%"></img>
                    <h1>{el.title}</h1>
                    <h3>{el.description}</h3>
                    <h4>{el.rating}</h4>
                </div>
                ))}
        </div>
    );
};
export default MovieList;