import React, { useMemo, useState, useEffect } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { Table } from '../../components/common/Table'
import FormSwitch from '../../components/common/FormSwitch'
import Tile from '../../components/Tile'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FeatureToggle } from './types'
import useFetch from '../../hooks/useFetch'
import { AxiosError } from 'axios'
import { Form, Formik } from 'formik'
import Alert from 'react-bootstrap/Alert';
import ViewHeader from '../../components/ViewHeader'
import FormFooter from '../../components/common/FormFooter'

const FeatureToggles = () => {
  const { data, loading, error } = useFetch<FeatureToggle[]>('http://localhost:3008/toggles', 'get')

  const { t } = useTranslation(['main', 'common'])

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    setDisabled(loading || !!error)
  }, [loading, error])

  const cols = useMemo<ColumnDef<FeatureToggle>[]>(
    () => [
      {
        header: '',
        cell: ({ row }) => {
          const { id, index } = row as any
          return <FormSwitch id={id} name={`featureToggles[${index}].isOn`} />
        },
        accessorKey: 'toggle',
        size: 80,
        minSize: 70,
        maxSize: 85,
      },
      {
        header: t('tableHeaders.name', { ns: 'featureToggles' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'value',
        enableResizing: true,
      },
      {
        header: t('tableHeaders.description', { ns: 'featureToggles' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'description',
        size: 400,
        minSize: 300,
        maxSize: 900,
      },
      {
        header: t('tableHeaders.lastToggled', { ns: 'featureToggles' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'created_at',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
      {
        header: t('tableHeaders.toggledBy', { ns: 'featureToggles' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'modified_at',
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
        featureToggles: data,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <>
          <ViewHeader text={t('title', { ns: 'featureToggles' })} loading={loading}/>
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

export default FeatureToggles
