import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.type.replace(props.alert.type.charAt(0), props.alert.type.charAt(0).toUpperCase())}!</strong> {props.alert.message}
        </div>
    )
}
