import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/site.css';

export default function MovieSite() {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovieHandler = async (e) => {
    e.preventDefault();

    if (text.length < 3) {
      Swal.fire('Enter at least 4 characters');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=d9f9d1f4&s=${text}`);
      const data = res.data;

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        Swal.fire("No Movies Found");
      }
    } catch (error) {
      Swal.fire("Something went wrong while fetching movies.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5 movie-page" style={{ backgroundColor: "#f4f4f4" }}>
      <h1 className="text-center text-uppercase text-black">Movies</h1>
      <form onSubmit={getMovieHandler} className="d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-success" style={{ backgroundColor: "#658d8185" }}>
        <input
          onChange={e => setText(e.target.value)}
          value={text}
          className="fs-5 p-3 rounded me-3 border border-success"
          placeholder="Search for a movie..."
        />
        <button className="btn btn-success p-3 fs-5" type="submit">Search</button>
      </form>

      {loading && <h4 className="text-center text-muted">Searching for movies...</h4>}

      <div className="d-flex flex-wrap justify-content-center px-1">
        {movies.map(movie => (
          <div key={movie.imdbID} className="card m-2" style={{ width: "18rem" }}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
              className="card-img-top"
              alt={movie.Title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Year} ({movie.Type})</p>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                View on IMDb
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
