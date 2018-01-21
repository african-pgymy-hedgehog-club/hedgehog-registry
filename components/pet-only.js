import React from 'react';
import Input from './input';

const PetOnly = ({
    name = 'pet_only',
    required = false,
}) => (
    <Input
        type="checkbox"
        name={name}
        required={required}
        value='Yes'
    />
);
 
export default PetOnly;