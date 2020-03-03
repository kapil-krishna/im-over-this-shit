import React from 'react';
import { UseFormValidation } from './hooks/useFormValidation';
import { ValidateUserFields } from './hooks/validateFields';
import './applicationForm.scss';

const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
}

export default function ApplicationForm() {
    const {handleSubmit, handleChange, values, errors, isSubmitting} = UseFormValidation(INITIAL_STATE, ValidateUserFields);

    return (
        <div className="applicationForm">
            {isSubmitting && <div>Is Submitting</div>}
        <form onSubmit={handleSubmit}>
            <label> 
                First name:
                <br></br>
                <input
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    autoComplete="off"
                    onChange={handleChange}
                    className={errors.firstName && 'error-input'}
                    />
                    {errors.firstName && <p className="error-text">{errors.firstName}</p>}
            </label>
            <br></br>
            <label> 
                Last name:
                <br></br>
                <input
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    autoComplete="off"
                    onChange={handleChange}
                    className={errors.lastName && 'error-input'}
                    />
                    {errors.lastName && <p className="error-text">{errors.lastName}</p>}
            </label>
            <br></br>
            <label> 
                Email:
                <br></br>
                <input
                    name="email"
                    type="text"
                    value={values.email}
                    autoComplete="off"
                    onChange={handleChange}
                    className={errors.email && 'error-input'}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
            </label>
            <br></br>
            <label> 
                Phone
                <br></br>
                <input
                    name="phone"
                    type="text"
                    value={values.phone}
                    autoComplete="off"
                    onChange={handleChange}
                    className={errors.phone && 'error-input'}
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Submit" disabled={isSubmitting} />
        </form>
        </div>
    );
}