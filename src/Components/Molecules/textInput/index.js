import React from 'react';
import { Label } from '../../Atoms/Label';
import { Input } from '../../Atoms/Input';
import { QuerySpace } from "../../Atoms/QuerySpace";
import { useFormContext } from "react-hook-form";

export const TextInput = ({ label, name, fieldRef }) => {
    const {errors} = useFormContext();

    return (
        <QuerySpace>
            <Label name={name}> {label} </Label>
            <Input
                name={name}
                type='text'
                fieldRef={fieldRef}
            />
            {errors[name] && <p>There is an error on this field.</p>}
        </QuerySpace>
    );
}