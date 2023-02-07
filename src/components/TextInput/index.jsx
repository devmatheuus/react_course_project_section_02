import './styles.css';

import P from 'prop-types';
import React from 'react';

export const TextInput = ({ handleChange, searchValue }) => (
    <input
        className="text-input"
        type="search"
        onChange={handleChange}
        value={searchValue}
        placeholder="Type your search"
    />
);

TextInput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired,
};
