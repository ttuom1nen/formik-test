import React from 'react'
import { ErrorMessage, Field, FieldAttributes } from 'formik'
import Form from 'react-bootstrap/Form'

const CustomField = ({ field, props }: any) => {
    return <Form.Control type="text" id={props?.id} {...field} {...props} />
}

const FormField = (props: FieldAttributes<any>) => {
    return (
        <div style={{ margin: '1rem 0 1rem 0' }}>
            {props?.label && (
                <Form.Label htmlFor={props?.id}>{props?.label}</Form.Label>
            )}
            <Field id={props?.id} name={props?.name} component={CustomField} />
            <ErrorMessage name={props?.name} />
        </div>
    )
}

export default FormField
