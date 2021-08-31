import React from 'react'
import {Button , Spinner} from "react-bootstrap";

const SpinnerLoader = ({text}) => {
    return (
        <>
            <Button variant="primary" disabled className="mb-2">
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mx-2"
                />
                {text}
            </Button>
        </>
    )
}

export default SpinnerLoader