import  { useState } from "react";
import Swal from "sweetalert2";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/site.css';

export default function MovieSite() {
    const [text, setText] = useState("");
    const [movies, setMovies] = useState([]);

    function getMovieHandler(e) {
        e.preventDefault();
        if (text.length < 3) {
            Swal.fire('Enter at least 3 Characters');
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=d9f9d1f4&s=${text}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === 'True') {
                    setMovies(data.Search);
                } else {
                    Swal.fire("No Movies Found");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container-fluid py-5 movie-page" style={{ backgroundColor: "#658d81" }}>
            <h1 className="text-center text-uppercase text-black">Movies</h1>
            <form onSubmit={getMovieHandler} className="d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-danger">
                <input onChange={e => setText(e.target.value)} className="fs-5 p-3 rounded me-3 border border-danger" />
                <button className="btn btn-danger p-3 fs-5">Search</button>
            </form>
            <div className="d-flex flex-wrap justify-content-center px-1">
                {movies.map(x => (
                    <div key={x.imdbID} className="card m-2" style={{ width: "18rem" }}>
                        <img src={x.Poster !== 'N/A' ? x.Poster : "placeholder.jpg"} className="card-img-top" alt={x.Title} />
                        <div className="card-body">
                            <h5 className="card-title">{x.Title}</h5>
                            <p className="card-text">{x.Year} ({x.Type})</p>
                            <a href={`https://www.imdb.com/title/${x.imdbID}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                View on IMDb
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
