import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Tile from '../../components/Tile'
import { Table } from '../../components/common/Table'
import { useTranslation } from 'react-i18next'
import { Alert } from 'react-bootstrap'
import { AxiosError } from 'axios'
import { FilmData } from './types'

const Swapi = () => {
  const { data, loading, error } = useFetch<FilmData>('https://swapi.dev/api/films/1/', 'get')

  const { t } = useTranslation(['main', 'common'])

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    setDisabled(loading || !!error)
  }, [loading, error])

  return (
    <>
      {error &&
        <Alert variant={'danger'}>
          {(error as AxiosError).message}
        </Alert>
      }
      <Tile title={t('title', { ns: 'Swapi' })} loading={loading}>
        {/* <Table data={data} columns={cols} /> */}
        {data && data.title}
      </Tile>
    </>
  )
}

export default Swapi
