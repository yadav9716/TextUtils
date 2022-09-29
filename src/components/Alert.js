import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase(word)
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        //   Execute inside div only if props.alert is not "null"
        props.alert && <div>                                
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
                
        </div>
    )
}
