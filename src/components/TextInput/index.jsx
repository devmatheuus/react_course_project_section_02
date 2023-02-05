import './styles.css';

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
