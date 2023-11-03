import React from 'react'
import { Field, FieldAttributes } from 'formik'

const FormSwitch = (props: FieldAttributes<any>) => {
    const { type, ...restProps } = props

    return (
        <div className="form-check form-switch">
            <Field
                type="checkbox"
                {...restProps}
                className="form-check-input"
            />
            {restProps.label && (
                <label
                    title=""
                    htmlFor={restProps?.id ?? ''}
                    className="form-check-label"
                >
                    {props.label}
                </label>
            )}
        </div>
    )
}

export default FormSwitch
