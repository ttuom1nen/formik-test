import React, { useMemo, useState, useEffect } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { Table } from '../../components/common/Table'
import FormSwitch from '../../components/common/FormSwitch'
import Tile from '../../components/Tile'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import type { Migration } from './types'
import useFetch from '../../hooks/useFetch'
import { AxiosError } from 'axios'
import { Form, Formik } from 'formik'
import Alert from 'react-bootstrap/Alert';
import ViewHeader from '../../components/ViewHeader'
import FormFooter from '../../components/common/FormFooter'

const Migrations = () => {
  const { data, loading, error } = useFetch<Migration[]>('http://localhost:3008/migrations', 'get')

  const { t } = useTranslation(['main', 'common'])

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    setDisabled(loading || !!error)
  }, [loading, error])

  const cols = useMemo<ColumnDef<Migration>[]>(
    () => [
      {
        header: t('tableHeaders.id', { ns: 'migrations' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'id',
        enableResizing: true,
      },
      {
        header: t('tableHeaders.name', { ns: 'migrations' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
        size: 400,
        minSize: 300,
        maxSize: 900,
      },
      {
        header: t('tableHeaders.batch', { ns: 'migrations' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'batch',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
      {
        header: t('tableHeaders.migration_time', { ns: 'migrations' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'migration_time',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
    ],
    []
  )

  return (
    <Formik
      initialValues={{
        migrations: data,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <>
          <ViewHeader text={t('title', { ns: 'migrations' })} loading={loading}/>
          {error &&
            <Alert variant={'danger'}>
              {(error as AxiosError).message}
            </Alert>
          }
          <Form>
            <Tile>
              <Table data={data ?? []} columns={cols} />
            </Tile>
            <FormFooter>
              <Button variant="primary" type="submit" disabled={disabled}>
                {t('submit', { ns: 'common' })}
              </Button>
              <Button
                variant="secondary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  console.log(props)
                }}
              >
                debug
              </Button>
            </FormFooter>
          </Form>
        </>
      )}
    </Formik>
  )
}

export default Migrations
