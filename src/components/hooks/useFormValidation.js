import {useState, useEffect} from 'react';

export function UseFormValidation(initialState, validate) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                alert(`Sending form...
                `);
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
        setSubmitting(true);
        const form = event.target;
        const formData = new FormData(form);     
        setSubmitting(false);
    }

    return {handleSubmit, handleChange, values, errors, isSubmitting}
}