import {useState, useEffect} from 'react';
import { encode } from 'punycode';

export function UseFormValidation(initialState, validate) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({"form-name": "contact", ...this.state })
                })
                    .then(setSubmitting(true))
                    .then(() => alert("Success!"))
                    .catch(error => alert(error));
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
    }, [errors])

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        // if (validationErrors.length===0) {
        //     fetch("/", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //         body: encode({"form-name": "contact", ...this.state })
        //     })
        //         .then(setSubmitting(true))
        //         .then(() => alert("Success!"))
        //         .catch(error => alert(error));
            
            setSubmitting(false);
        }
    
        
    return {handleSubmit, handleChange, values, errors, isSubmitting}
}