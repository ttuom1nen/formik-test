import React from 'react'
import { Formik, Field, Form, useFormikContext } from 'formik'
import * as Yup from 'yup'
import AdditionalInfo from './AdditionalInfo'
import Button from 'react-bootstrap/Button'
import Input from 'react-bootstrap/Button'
import FormFeedback from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import FormField from '../../components/common/FormField'
import FormSwitch from '../../components/common/FormSwitch'
import FormGroup from '../../components/common/FormGroup'
import Tile from '../../components/Tile'
import { useTranslation } from 'react-i18next'
// import Form from "react-bootstrap/Form";
// import { Field as FormikField } from "formik";

const Main = () => {
  const validatonSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const { t } = useTranslation(['main', 'common'])

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
        <Form>
          <Tile title={t('basicInfo.title', { ns: 'main' })}>
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
        </Form>
      )}
    </Formik>
  )
}

export default Main
