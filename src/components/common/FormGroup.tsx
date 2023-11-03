import React from 'react'
import Form from 'react-bootstrap/Form'

const FormGroup = ({ props, children }: any) => {
    return <Form.Group {...props}>{children}</Form.Group>
}

export default FormGroup
