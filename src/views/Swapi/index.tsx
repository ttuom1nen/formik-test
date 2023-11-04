import React from 'react'
import useFetch from '../../hooks/useFetch'

const Swapi = () => {
  const { data, loading, error } = useFetch('https://swapi.dev/api/films/1/')

  if (loading) return <p>Loading...</p>

  if (error) console.log(error)

  if (data) console.log(data)

  // TODO: Fix any
  return <div>{(data as any)?.title}</div>
}

export default Swapi
