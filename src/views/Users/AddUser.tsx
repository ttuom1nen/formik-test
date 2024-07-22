import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FormField from '../../components/common/FormField'
import FormSwitch from '../../components/common/FormSwitch'
import AdditionalInfo from './AdditionalInfo'
import { useTranslation } from 'react-i18next'

const AddUser = () => {
    const { t } = useTranslation(['users', 'common'])
    
    return (
        <>
            <Row>
                <Col>
                    <FormField
                        id="first_name"
                        name="first_name"
                        placeholder="First name"
                        label={t('firstName', { ns: 'common' })}
                    />
                </Col>
                <Col>
                    <FormField
                        id="last_name"
                        name="last_name"
                        placeholder="Last name"
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
        </>
    )
}

export default AddUser