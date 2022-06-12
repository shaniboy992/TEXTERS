import React from 'react';


export default function Alert(props) {
    return(
       props.alert && <div className="alert alert-success d-flex align-items-center" role="alert">
        <div> <strong> {props.alert.type} :  {props.alert.msg}</strong>
            </div>
        </div>
    )
    
}
