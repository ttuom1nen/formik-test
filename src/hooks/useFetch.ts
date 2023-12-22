import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    axios({
      url,
      method: 'get',
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

    // axios
    //   .get(url)
    //   .then((response) => {
    //     setData(response.data)
    //   })
    //   .catch((e) => {
    //     setError(e)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }, [url])

  return { data, loading, error }
}

export default useFetch
