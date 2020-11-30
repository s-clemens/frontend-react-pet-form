import React from 'react';
import { useForm, FormProvider} from "react-hook-form";
import { TextInput } from "../../Molecules/textInput";
import { Button } from "../../Atoms/Button"
import {NumberInput} from "../../Molecules/numberInput";
import {RadioInput} from "../../Molecules/RadioInput";

export const Form = () => {

    const methods = useForm();
    const onSubmit = (data) => console.log(data);



    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>

                <TextInput
                    name="firstName"
                    label="Jouw voornaam: "
                    fieldRef={methods.register({
                        required: true
                    })}
                />

                <TextInput
                    name="lastName"
                    label="Jouw achternaam: "
                    fieldRef={methods.register({
                        required: true
                    })}
                />

                <NumberInput
                    name="age"
                    label="Jouw leeftijd: "
                    fieldRef={methods.register({
                        required: true,
                        min: 18
                    })}
                />

                <TextInput
                    name="postalCode"
                    label="Jouw postcode: "
                    fieldRef={methods.register({
                        required: true,
                        pattern: /[0-9]{4}[a-zA-Z]{2}/
                    })}
                />

                <NumberInput
                    name="houseNumber"
                    label="Jouw huisnummer zonder toevoeging: "
                    fieldRef={methods.register({
                        required: true
                    })}
                />

                <RadioInput
                    options={["hond", "kat", "hamster", "muis", "anders"]}
                    name="favPet"
                    label={"Jouw favoriete huisdier"}
                    />








                <Button type="submit" value="SUBMIT"/>
            </form>
        </FormProvider>
    );
};

