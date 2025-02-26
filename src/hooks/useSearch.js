import { useState, useRef, useEffect } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setError('El texto debe tener al menos 3 caracteres')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('El texto no puede ser un número')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
