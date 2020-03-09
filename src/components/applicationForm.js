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
        <div className="appFormContainer">
            {isSubmitting && <div>Is Submitting</div>}
        <form className="appForm" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal information</legend>
                <field>
                    <label>First name</label>
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
                </field>
                <field>
                    <label>Last name:</label>
                    <input
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        autoComplete="off"
                        onChange={handleChange}
                        className={errors.lastName && 'error-input'}
                        />
                        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                </field>
                <field>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="text"
                        value={values.email}
                        autoComplete="off"
                        onChange={handleChange}
                        className={errors.email && 'error-input'}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                </field>
                <field>
                    <label>Phone:</label>
                    <input
                        name="phone"
                        type="text"
                        value={values.phone}
                        autoComplete="off"
                        onChange={handleChange}
                        className={errors.phone && 'error-input'}
                        />
                        {errors.phone && <p className="error-text">{errors.phone}</p>}
                </field>
                <br></br>
                <input className="submitButton" type="submit" value="Submit" disabled={isSubmitting} />
            </fieldset>
        </form>
        </div>
    );
}