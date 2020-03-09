export function ValidatePostFields(values) {
    let errors = {};
    if (!values.from) {
        errors.from = 'Required';
    }
    if (!values.to) {
        errors.to = 'Required';
    }
    if (!values.message) {
        errors.message = 'Required';
    }
    return errors;
}

export function ValidateUserFields(values) {
let errors = {};
if (!values.firstName) {
    errors.firstName = 'First name is required';
}
if (!values.lastName) {
    errors.lastName = 'Last name is required';
}
if (!values.email) {
    errors.email = 'Email is required';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please use a valid email address';
}
if (!values.phone) {
    errors.phone = 'Phone is required';
}
return errors;
}