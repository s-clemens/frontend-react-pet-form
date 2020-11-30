import React from 'react';

export const Input = ({ type, name, fieldRef }) => (
    <input
        name = {name}
        type = {type}
        ref= {fieldRef}
        id={name}
    />
)

