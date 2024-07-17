import React from 'react'
import { Formik, Form } from 'formik'
import AdditionalInfo from './AdditionalInfo'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import FormField from '../../components/common/FormField'
import FormSwitch from '../../components/common/FormSwitch'

import Tile from '../../components/Tile'
import { useTranslation } from 'react-i18next'
import ViewHeader from '../../components/ViewHeader'
import FormFooter from '../../components/common/FormFooter'
import { validatonSchema } from './validationSchema'

const Users = () => {
  const { t } = useTranslation(['users', 'common'])

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        showAdditionalInfo: '',
        additionalInfoText: '',
      }}
      validationSchema={validatonSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(props) => (
        <>
          <ViewHeader text={t('title', { ns: 'users' })} />
          <Form>
            <Tile title={t('basicInfo.title', { ns: 'users' })}>
              <Row>
                <Col>
                  <FormField
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    label={t('firstName', { ns: 'common' })}
                  />
                </Col>
                <Col>
                  <FormField
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    label={t('lastName', { ns: 'common' })}
                  />
                </Col>
              </Row>

              <FormField
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                label={t('email', { ns: 'common' })}
              />

              <FormSwitch
                id="showAdditionalInfo"
                name="showAdditionalInfo"
                label={t('additionalInfo', { ns: 'common' })}
              />

              <AdditionalInfo />
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
