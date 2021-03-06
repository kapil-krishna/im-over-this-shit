import React from 'react';
import { UseFormValidation } from './hooks/useFormValidation';
import { ValidateAppFields } from './hooks/validateFields';
import './applicationForm.scss';

const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    campus: "",
    cohort: ""
}

export default function ApplicationForm() {
    const {handleSubmit, handleChange, values, errors, isSubmitting} = UseFormValidation(INITIAL_STATE, ValidateAppFields);

    return (
        <div className="appFormContainer">
            {isSubmitting && <div>Is Submitting</div>}
        <h3 className="firstHeading">Personal information</h3>
        <p className="appFormNote">* denotes mandatory field</p>

        <form 
            name="app" 
            method ="post" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field" 
            className="appForm"
            onSubmit={handleSubmit}>

            <input type="hidden" name="form-name" value="app" />

            <div className="personalInfo">
                <field>
                    <label>First name*</label>
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
                    <label>Last name*</label>
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
                    <label>Email*</label>
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
                    <label>Phone*</label>
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
                <field>
                    <label>Where would you like to attend?*</label>
                    <select 
                        name="campus" 
                        type="text"
                        value={values.campus} 
                        autoComplete="off" 
                        onChange={handleChange} 
                        className={errors.campus && 'error-input'}>
                        <option value="select">Please select one...</option>
                        <option value="london">London</option>
                        <option value="manchester">Manchester</option>
                        <option value="edinburgh">Edinburgh</option>
                        <option value="dublin">Dublin</option>
                    </select>
                    {errors.campus && <p className="error-text">{errors.campus}</p>}
                </field>
                <field>
                    <label>Which cohort would you like to join?*</label>
                    <select 
                        name="cohort" 
                        type="text"
                        value={values.cohort} 
                        autoComplete="off" 
                        onChange={handleChange} 
                        className={errors.cohort && 'error-input'}>
                        <option selected="selected" value="select">Please select one...</option>
                        <option value="march20">March 2020</option>
                        <option value="sept20">September 2020</option>
                        <option value="march21">March 2021</option>
                        <option value="sept21">September 2021</option>
                    </select>
                    {errors.cohort && <p className="error-text">{errors.cohort}</p>}
                </field>
            </div>
            
        <h3>CV</h3>
            <div className="cvInfo">
                <field>
                    <label>CV*</label>
                    <input
                        name="cv"
                        type="file"
                        value={values.cv}
                        autoComplete="off"
                        // onChange={handleChange}
                        className={errors.cv && 'error-input'}
                        />
                        {errors.cv && <p className="error-text">{errors.cv}</p>}
                </field>
                <field className="applyReason">
                    <label>Why do you want to get in to software development?*</label>
                    <textarea
                        name="applyReason"
                        rows="8"
                        value={values.query}
                        autoComplete="off"
                        onChange={handleChange}
                        className={errors.applyReason && 'error-input'}
                        />
                        {errors.applyReason && <p className="error-text">{errors.applyReason}</p>}
                </field>
            </div>


                <input className="submitButton" type="submit" value="Submit" disabled={isSubmitting} />

        </form>
        </div>
    );
}