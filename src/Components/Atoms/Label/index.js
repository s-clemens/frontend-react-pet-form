import React from 'react';

export const Label = ({ children, name }) => (
    <label htmlFor={name}>{children}</label>
)