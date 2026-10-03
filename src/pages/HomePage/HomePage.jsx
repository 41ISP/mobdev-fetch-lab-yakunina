import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './HomePage.css';
import {  useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

function HomePage() {
 
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const [query, setQuery] = useState(queryParam)
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

   const handleSearch = async (e) => {
    e.preventDefault()

  try{
    
    setIsLoading(true)
    setError(null)

const res = await fetch(
      "https://www.omdbapi.com/?apikey=" + import.meta.env.VITE_OMDB_API_KEY + "&s=" + query,
   )

    const data = await res.json()
    if (!res.ok || data.Response === "False") {
    

    throw new Error(data.detail[0].msg || "пошло что-то не так")
    }
                
    console.log(data)
    setMovies(data.Search)
    } catch (error) {
    console.error(error)
      setError(error.message)
    } finally {
    setIsLoading(false)
    }

    }
 
  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar query = {query} onQueryChange = {setQuery} onSubmit = {handleSearch}/>
        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
            {isLoading && <Loader />}
            {!isLoading && error && <ErrorMessage />}
            {!isLoading && !error && <MovieList movies={movies}/>}
        </section>
      </div>
    </main>
  );
}

export default HomePage;
