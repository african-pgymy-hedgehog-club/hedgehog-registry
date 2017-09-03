"use strict";

import React from 'react';

const paragraphs = [
    "The African Pygmy Hedgehog Registry is open to ALL pygmy hedgehogs in the United Kingdom. We are also registered under the Data Protection Act 1998, your details are safe and secure.",
    "There was a need for an unbiased, friendly, approachable registry in the United Kingdom and as well as registering your Hedgehogs with us you can download our care sheets and contracts to send with your hoglets.",
    "To help us expand our records we would be very grateful if you can send in other certificates you may have to help us complete our records.",
    "The Club Registry is very thankful to those who made very generous donations to help set up this registry.",
    "All registrations cost £1"
];

const About = () => (
    <div style={{
        padding: 5
    }}>
        <h1 style={{
            marginTop: 0
        }}>
            About
        </h1>

        {paragraphs.map((paragraph, key) => (
            <p key={key}>
                {paragraph}
            </p>
        ))}
    </div>
);

module.exports = About;
