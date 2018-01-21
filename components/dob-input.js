import React from 'react';
import Input from './input';

const DOB = ({
    name, 
    data: {minDate, maxDate}, 
    required = false, 
    parentUpdateState = {}, 
    value
}) => (
    <div>
        <Input
            type="date"
            name={name}
            required={required}
            parentUpdateState={parentUpdateState}
            min={minDate}
            max={maxDate}
            value={value}
        />
    </div>
);

export default DOB;
