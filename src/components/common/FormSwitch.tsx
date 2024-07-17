import React, { useContext } from 'react'
import { Field, FieldAttributes } from 'formik'
import { MainContext } from '../../MainContext'
import ExtraLabel from './helpers/ExtraLabel'

const FormSwitch = (props: FieldAttributes<any>) => {
    const { type, ...restProps } = props
    const { user } = useContext(MainContext)
    
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
            {user.userGroups.includes("dev") ? <ExtraLabel text={props?.name}/> : null }
        </div>
    )
}

export default FormSwitch
