import React from 'react';
import Input from './input';

const DOB = ({name, data, required = false, parentUpdateState = {}, value}) => (
    <div>
        <script type="text/javascript" src="datepicker.min.js"></script>
        <Input
            type="text"
            name={name}
            required={required}
            parentUpdateState={parentUpdateState}
            data-uk-datepicker={JSON.stringify(data)}
        />
    </div>
)

export default DOB;
