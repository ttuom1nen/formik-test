import React from 'react'

interface Props {
    text: string
}

const ErrorMessage = ({ text }: Props) => {
    return (
        <div><p>{text}</p></div>
    )
}

export default ErrorMessage