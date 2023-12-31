import React, { useMemo } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { Table } from '../../components/common/Table'
import FormSwitch from '../../components/common/FormSwitch'
import { Form, Formik } from 'formik'
import Tile from '../../components/Tile'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FeatureToggle } from './types'
import useFetch from '../../hooks/useFetch'

const FeatureToggles = () => {
  const { data, loading, error } = useFetch('http://localhost:3008/toggles', 'get')

  if (error) console.log(error)

  const { t } = useTranslation(['main', 'common'])

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
        accessorKey: 'label',
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
        accessorKey: 'updated_at',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
    ],
    []
  )

  if (loading) return <p>Loading...</p>

  if (!data) return <p>No data</p>

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
        <Form>
          <Tile title={t('title', { ns: 'featureToggles' })}>
            <Table data={data} columns={cols} />
          </Tile>
          <div
            style={{
              width: '100%',
              padding: '2rem',
              position: 'fixed',
              bottom: 0,
            }}
          >
            <Button variant="primary" type="submit">
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
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FeatureToggles
