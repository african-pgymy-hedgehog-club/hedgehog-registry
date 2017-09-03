"use strict";

import React from 'react';

const defaultValue = "african pygmy";

const options = [
    'african pygmy',
    'northern african pygmy',
    'egyption long-eared',
    'lesser tenrec',
    'greater tenrec',
    'lowland streaked tenrec',
];

const HogType = ({name = "hog_type"}) => (
    <select name={name} defaultValue={defaultValue}>
        {options.map((name, index) => (
            <option key={index} value={name}>
                {name.replace(/\b[a-z]/g, letter => letter.toUpperCase())}
            </option>
        ))}
    </select>
);

export default HogType;