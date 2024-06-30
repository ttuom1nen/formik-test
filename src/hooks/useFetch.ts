import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

const useFetch = <T>(url: string, method: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AxiosError | null>(null)

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
