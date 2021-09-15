import React , {useState} from 'react'
import fire from '../../config/firebase';
import {FormComp , SuccessNotif} from "./LocalComponents";

const CompleteProfile = ({size}) => {
    // get data from localStorage dan firestore
    let dataUser;
    // cek jika key dataUser ada datanya , get datanya
    if (localStorage.key("dataUser") !== null) {
        dataUser = JSON.parse(localStorage.getItem("dataUser"));
        fire.firestore().collection("users").doc(dataUser.uid).get()
        .then(userDetail => {
            // pengecekan photoURL dan document user di collection
            if ((dataUser.photoURL !== null) && (userDetail.exists)) {
                window.location.href = "/dashboard";
            }
        })

    } else {
        // jika gaada langsung arahkan ke halaman login
        window.location.href = "/login";
    }

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
                    <FormComp success={success} handleSuccess={(valueFromChild) => handleSuccess(valueFromChild)} dataUser={dataUser} size={size} /> 
                ) : ( 
                    <SuccessNotif /> 
                ) 
            }
        </div>
    )
}

export default CompleteProfile
