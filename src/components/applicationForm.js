import React from "react";

const ApplicationForm = () => (
    <form>
    <label>
      First name
      <input type="text" name="firstName" />
    </label>
    <label>
      Last name
      <input type="text" name="lastName" />
    </label>
    <button type="submit">Submit</button>
  </form>
)

export default ApplicationForm;