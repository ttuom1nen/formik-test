import React, { useMemo } from 'react'
import { Formik, Form } from 'formik'
import Button from 'react-bootstrap/Button'
import Tile from '../../components/Tile'
import { useTranslation } from 'react-i18next'
import ViewHeader from '../../components/ViewHeader'
import FormFooter from '../../components/common/FormFooter'
import { validatonSchema } from './validationSchema'
import useFetch from '../../hooks/useFetch'
import { User } from './types'
import { ColumnDef } from '@tanstack/react-table'
import { Table } from '../../components/common/Table'
import axios from 'axios'
import AddUser from './AddUser'

const Users = () => {
  const { t } = useTranslation(['users', 'common'])

  const { data, loading, error } = useFetch<User[]>('http://localhost:3008/users', 'get')

  const mockUser = {
    username: "ASilva",
    email: "matti@masa.com",
    password_hash: "d41d8cd98f00b204e9800998ecf8427e",
    first_name: "Albert",
    last_name: "Silva",
    profile_picture: "api.dicebear.com/7.x/pixel-art/svg"
  }

  const cols = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: t('user.id', { ns: 'users' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'id',
        enableResizing: true,
      },
      {
        header: t('user.username', { ns: 'users' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'username',
        size: 400,
        minSize: 300,
        maxSize: 900,
      },
      {
        header: t('user.first_name', { ns: 'users' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'first_name',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
      {
        header: t('user.last_name', { ns: 'users' }),
        cell: (row) => row.renderValue(),
        accessorKey: 'last_name',
        size: 175,
        minSize: 175,
        maxSize: 200,
      },
    ],
    []
  )

  const handleSubmit = async (values: any) => {
    console.log("handleSubmit")
    console.log(values)

    try {
      const response = await axios.post('http://localhost:3008/users', values)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Formik
      initialValues={{ ...mockUser }}
      // validationSchema={validatonSchema}
      onSubmit={(values) => {
        console.log("onSubmit")
        handleSubmit(values)
      }}
    >
      {(props) => (
        <>
          <ViewHeader text={t('title', { ns: 'users' })} />
          <Form>
            <Tile title={t('basicInfo.title', { ns: 'users' })} loading={loading}>
              <Table data={data ?? []} columns={cols} />
            </Tile>
            <AddUser />
            <FormFooter>
              <Button variant="primary" type="submit" disabled={false}>
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

export default Users
