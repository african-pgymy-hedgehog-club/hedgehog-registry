import React from 'react';

const DOB = ({name, data}) => (
    <div>
        <script type="text/javascript" src="datepicker.min.js"></script>
        <input
            type="text"
            name={name}
            data-uk-datepicker={JSON.stringify(data)}
        />
    </div>
)

export default DOB;
