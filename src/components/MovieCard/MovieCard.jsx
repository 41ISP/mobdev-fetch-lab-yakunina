import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';

function MovieCard({Title, Year, Poster, Type, imdbID}) {
  return (
    <article className="movie-card">
      <Link to={`/movie/${imdbID}`} type="button" className="movie-card__poster-button" aria-label={`Открыть страницу фильма ${Title}`}>
        <img
          className="movie-card__poster"
          src={Poster}
          alt={`Постер ${Title}`}
        />
        <span className="movie-card__type">{Type}</span>
      </Link>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title="Joker">{Title}</h3>
        <p className="movie-card__year">{Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
