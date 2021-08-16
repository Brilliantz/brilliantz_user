import React , {useState} from 'react'
import {FormComp , SuccessNotif} from "./LocalComponents";

const ForgotPassword = () => {
    const [success , setSuccess] = useState(false);

    const handleSuccess = (value) => {
        setSuccess(value);
    }

    return (
        <div 
            className={`${success === false ? 'd-flex justify-content-center' : 'd-flex justify-content-center align-items-center'}`}
            style={{position: 'absolute' , top: '80px' , left: '0' , right: '0' , bottom: '0'}}
        >
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