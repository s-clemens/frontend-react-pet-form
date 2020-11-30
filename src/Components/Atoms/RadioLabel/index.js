import React from 'react';

export const RadioLabel = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor}>{children}</label>
)