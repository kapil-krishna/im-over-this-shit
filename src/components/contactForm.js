import React from "react";
import { UseFormValidation } from './hooks/useFormValidation';
import { ValidateAppFields } from './hooks/validateFields';
import "./contactForm.scss"

const INITIAL_STATE = {
    fullName: "",
    email: "",
    phone: "",
    uery: ""
}

export default function ContactForm() {
    const {handleSubmit, handleChange, values, errors, isSubmitting} = UseFormValidation(INITIAL_STATE, ValidateAppFields);

    return (
        <div className="contactFormContainer">
            <p className="contactFormNote">*denotes mandatory field</p>
            <form
                className="contactForm"
                name="contact" 
                method ="post" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field" >

                <input type="hidden" name="form-name" value="contact" /> 

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
                    <label>Phone</label>
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
                <field className="queryBox">
                    <label>Query*</label>
                    <textarea
                        name="query"
                        rows="6"
                        value={values.query}
                        autoComplete="off"
                        onChange={handleChange}
                        className={errors.query && 'error-input'}
                        />
                        {errors.query && <p className="error-text">{errors.query}</p>}
                </field>

                <input className="submitButton" type="submit" value="Submit" disabled={isSubmitting} />

            </form>
        </div>
    )
}