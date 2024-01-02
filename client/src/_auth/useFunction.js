import React, { useState } from 'react';
import { signupSchema } from '../lib/validation';

const useFunction = (...props) => {

    const [validationMsg, setValidationMsg] = useState({});

    /* * * * * * * * * * * * 
     *  validation part    *
     * * * * * * * * * * * */

    const signupValidation = (...value) => {

        try {
             signupSchema.parse(...value)
        } catch (error) {

            const fieldErrors = {};
            error.errors.map((err) => {
                fieldErrors[err.path[0]] = err.message;
                return null;
            });
            setValidationMsg(fieldErrors)
            throw Error;

        }
    }



    return [signupValidation, validationMsg]
}

export default useFunction
