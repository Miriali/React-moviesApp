import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

const Movie = ({ title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
            <img 
                src={
                    poster_path 
                        ? IMG_API + poster_path
                        : "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
                alt={title}
            />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;
