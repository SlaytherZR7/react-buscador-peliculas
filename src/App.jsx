import './App.css'
import { useCallback, useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'

const App = () => {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error: searchError } = useSearch()
  const { movies, loading, error: moviesError, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 300),
    [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
    debouncedGetMovies(event.target.value)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: searchError ? 'red' : 'transparent'
            }} type='text' value={search} name='query' onChange={handleChange} placeholder='Joker, Your Name, Sherk'
          />
          <label>Ordenar

            <input type='checkbox' onChange={handleSort} checked={sort} />
          </label>
          <button type='submit'>Buscar</button>
        </form>
        {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      </header>
      <main>
        {moviesError && <p style={{ color: 'red' }}>{moviesError}</p>}
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
