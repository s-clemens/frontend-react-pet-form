import React from 'react';

export const RadioOptionInput = ({ name, fieldRef, value, id}) => (
    <input
        name = {name}
        type = 'radio'
        ref= {fieldRef}
        id={id}
        value={value}
    />
)

