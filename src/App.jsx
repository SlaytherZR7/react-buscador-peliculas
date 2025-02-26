import './App.css'

const App = () => {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input type='text' placeholder='Joker, Your Name, Sherk' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        Aqui van los resultados
      </main>
    </div>
  )
}

export default App
