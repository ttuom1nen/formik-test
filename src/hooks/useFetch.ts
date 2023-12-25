import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url: string, method: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [method, url])

  return { data, loading, error }
}

export default useFetch
