import React , {useState} from 'react'
import {FormComp , SuccessNotif} from "./LocalComponents";

const ForgotPassword = () => {
    const [success , setSuccess] = useState(false);

    const handleSuccess = (value) => {
        setSuccess(value);
    }

    return (
        <div style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            right: '0', 
            bottom: '0',
        }} className="d-flex justify-content-center align-items-center">
            { 
                success === false ? ( 
                    <FormComp success={success} handleSuccess={(valueFromChild) => handleSuccess(valueFromChild) } /> 
                ) : ( 
                    <SuccessNotif /> 
                ) 
            }
        </div>
    )
}

export default ForgotPassword
