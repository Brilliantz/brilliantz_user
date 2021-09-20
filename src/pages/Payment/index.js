import React , {useState} from 'react'
import {FormComp , SuccessNotif} from "./LocalComponents";

const Payment = ({container , size}) => {
    const [success , setSuccess] = useState(false);

    const handleSuccess = (value) => {
        setSuccess(value);
    }

    const CustomContainer = container;

    return (
        <div style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            right: '0', 
            bottom: '0',
            overflow: 'auto',
        }}>
            <CustomContainer className="d-flex justify-content-center">
                { 
                    success === false ? ( 
                        <FormComp success={success} handleSuccess={(valueFromChild) => handleSuccess(valueFromChild) } size={size} /> 
                    ) : ( 
                        <SuccessNotif /> 
                    ) 
                }
            </CustomContainer>
        </div>
    )
}

export default Payment
