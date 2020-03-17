export function ValidateAppFields(values) {
let errors = {};
if (!values.firstName) {
    errors.firstName = 'First name is required';
}
if (!values.lastName) {
    errors.lastName = 'Last name is required';
}
if (!values.fullName) {
    errors.fullName = 'Full name name is required';
}
if (!values.email) {
    errors.email = 'An email address is required';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please use a valid email address';
}
if (!values.phone) {
    errors.phone = 'A phone number is required';
}
if(values.campus==="select") {
    errors.campus = 'Please choose a location';
}
if(values.cohort==="select") {
    errors.cohort = 'Please choose a cohort';
}
return errors;
}