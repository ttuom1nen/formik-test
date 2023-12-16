import React, { useMemo } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { Table } from '../../components/common/Table'
import FormSwitch from '../../components/common/FormSwitch'
import { Form, Formik } from 'formik'
import Tile from '../../components/Tile'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { FeatureToggle } from './types'

const mockData: FeatureToggle[] = [
  {
    id: '890dd04c-6d03-5463-a82b-cce5bacff101',
    name: 'JRA-1688_Qatar',
    description:
      'fresh short dull wore skin call mouth seven cannot program get goose hardly class larger war are musical better industrial stranger horse similar run',
    isOn: false,
    toggleDate: null,
    toggledBy: null,
  },
  {
    id: 'cd3b695c-9c08-5989-a28f-1abed4013ea3',
    name: 'JRA-1176_United_Arab_Emirates',
    description:
      'pilot image attached mission wind myself willing broken pour method great composed music angry ride rod floating section speech arrow cake pure you are',
    isOn: false,
    toggleDate: null,
    toggledBy: null,
  },
  {
    id: '437ca2cb-4384-5598-9917-526d04a6ac9c',
    name: 'JRA-1259_Australia',
    description:
      'yes look adventure south vowel captured purple goose write capital similar thank massage queen along opposite once worried huge butter dozen back individual sets',
    isOn: false,
    toggleDate: null,
    toggledBy: null,
  },
  {
    id: '95795c71-f0d9-5c9e-8410-068dbab1154a',
    name: 'JRA-1118_Chile',
    description:
      'swing equipment composed perhaps sum dress construction shot opposite ten clothes stop law branch wire nothing gentle aloud both bill enter lunch education slight',
    isOn: true,
    toggleDate: dayjs().format('DD/MM/YYYY'),
    toggledBy: 'seppo@test.com',
  },
]

const FeatureToggles = () => {
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
        accessorKey: 'name',
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
        accessorKey: 'toggleDate',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
      {
        header: t('tableHeaders.toggledBy', { ns: 'featureToggles' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'toggledBy',
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
        featureToggles: mockData,
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <Form>
          <Tile title={t('title', { ns: 'featureToggles' })}>
            <Table data={mockData} columns={cols} />
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
