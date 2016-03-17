"use strict";

import React from 'react';
import Form from './uikit-form';
import DOB from './dob-input';
import ReactDOM from 'react-dom'
import moment from 'moment';
import InputGroup from './input-group';
import Input from './input'

let formRef;

class RegisterHedgehog extends React.Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h2>
                    Register Hedgehog
                </h2>

                <Form type="horizontal"
                    style={{
                        margin: 'auto',
                        paddingBottom: 15
                    }}

                    referance={node => {
                        formRef = node;
                    }}
                    onSubmit={e => {
                        e.preventDefault();

                        let formData = new FormData(formRef);

                        fetch('/', {
                            method: 'POST',
                            body: formData
                        }).then(res => {
                            return res.json();
                        }).then(text => {
                            return
                        }).catch(err => {
                            console.error(err);
                        });
                    }}
                >
                    <Input
                        type="text"
                        name="breeder_name"
                        required={true}
                    />

                    <Input
                        type="text"
                        name="breeder_affix"
                    />

                    <Input
                        type="text"
                        name="hedgehog_name"
                        required={true}
                    />

                    <select name="hedgehog_gender">
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                    </select>

                    <DOB
                        name="date_of_birth"
                        data={{
                            format: "DD/MM/YYYY",
                            minDate: moment(new Date()).subtract(5, 'years').format("DD.MM.YYYY"), //"16.05.15",
                            maxDate: moment(new Date()).subtract(4, 'months').format("DD.MM.YYYY") //"08.03.15"
                        }}
                    />

                    <Input
                        type="text"
                        name="hedgehog_color"
                        required={true}
                    />

                    <Input
                        type="file"
                        name="hedgehog_image"
                    />

                    <Input
                        type="text"
                        name="sire_name"
                        required={true}
                    />

                    <Input
                        type="text"
                        name="sire_reg_number"
                    />

                    <Input
                        type="text"
                        name="dam_name"
                        required={true}
                    />

                    <Input
                        type="text"
                        name="dam_reg_number"
                    />

                    <Input
                        type="text"
                        name="owners_name"
                        required={true}
                    />

                    <textarea
                        cols="25"
                        rows="7"
                        name="owners_address"
                    />

                    <Input
                        type="email"
                        name="owners_email"
                    />

                    <Input
                        type="email"
                        name="breeders_email"
                    />

                    <Input
                        type="email"
                        name="your_email"
                        required={true}
                    />

                    <button className="uk-button uk-button-primary uk-button-large">
                        Send Registration
                    </button>
                </Form>
            </div>
        );
    }
}


if(typeof window !== 'undefined' && window.document)  { // If module is on the client side
    ReactDOM.render(
        <RegisterHedgehog />,
        document.getElementById('app')
    );
}
else {
    module.exports = RegisterHedgehog;
}
