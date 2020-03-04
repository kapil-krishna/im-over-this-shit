import React from 'react';
import { bool, func } from 'prop-types';

import './toggleButton.scss';

const ToggleButton = ({ toggle, setToggle }) => (
    <button className="toggle-button" toggle={toggle} onClick={() => setToggle(!toggle)}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);

ToggleButton.propTypes = {
    toggle: bool.isRequired,
    setToggle: func.isRequired
}

export default ToggleButton;
