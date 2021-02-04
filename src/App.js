import React, { useEffect, useState } from 'react';
import Movie from './Components/movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=97923b6b66a38e04b67d988ef0ee66d4&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=97923b6b66a38e04b67d988ef0ee66d4&query=";


function App() {
  const [ movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API+searchTerm); 
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
          <button className="btn" onChange={handleOnChange}>
            Send
          </button>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && 
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;