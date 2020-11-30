import React from 'react';
import { Label } from '../../Atoms/Label';
import {TextInput} from "../textInput";
import { QuerySpace } from "../../Atoms/QuerySpace";
import { useFormContext } from "react-hook-form";
import {RadioOptionInput} from "../../Atoms/radioOptionInput";
import {RadioLabel} from "../../Atoms/RadioLabel";


export const RadioInput = ({ label, name, options }) => {
    const {watch, errors, register} = useFormContext();
    // const [options, setOptions] = useState([]);

    const watchPetValue = watch(name);

    const radioItems = options.map((option) => {
            return (
                <div>
                    <RadioOptionInput
                        id={option}
                        name={name}
                        value={option}
                        fieldRef={register({
                            required: true
                        })}
                    />
                    <RadioLabel children={option} htmlFor={option}/>
                </div>
            )
        })

    return (
        <QuerySpace>
            <Label name={name}> {label} </Label>
            <ul>
                {radioItems}
            </ul>
            {watchPetValue === "anders" && <TextInput label="Namelijk: " name="otherFavPet" fieldRef={register({required: true})}/>}
            {errors[name] && <p>There is an error on this field.</p>}


        </QuerySpace>
    );
}