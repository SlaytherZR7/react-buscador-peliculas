const ListOfMovies = ({ movies }) => {
  const placeholderImage = 'https://placehold.co/300x450?text=No+Image'

  const handleImageError = (e) => {
    e.target.src = placeholderImage
  }
  return (
    <ul className='movies'>
      {
            movies.map(movie => (
              <li key={movie.id} className='movie'>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.image} alt={movie.title} onError={handleImageError} />
              </li>
            ))
        }
    </ul>
  )
}

const NoMoviesResults = () => {
  return <p>No se encontraron películas para esta búsqueda</p>
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
  )
}
