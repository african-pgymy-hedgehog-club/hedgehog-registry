"use strict";

import React from 'react';
import Form from './uikit-form';
import DOB from './dob-input';
import ReactDOM from 'react-dom';
import moment from 'moment';
import InputGroup from './input-group';
import Input from './input';
import PaymentModal from './payment-modal';
import async from 'async';

class RegisterHedgehog extends React.Component {
    constructor() {
        super();

        this.formRef;
        this.state = {
            paymentModal: {
                display: false,
                data: {}
            },
            inputs: {}
        };
    }

    /**
     * Send form data to server and use json response for paypal payment details in payment modal
     * @param {event} e
     */
    submitForm(e) {
        e.preventDefault();

        this.formValid((err, valid) => {
            if(err) {
                console.error(err);
            }

            if(valid) {
                let formData = new FormData(this.formRef);

                // Empty inputs after submitting form
                let inputs = {};
                for (let input in this.state.inputs) { // For ech input check if they are valid
                    if (this.state.inputs.hasOwnProperty(input)) {
                        inputs[input] = this.state.inputs[input];
                        inputs[input].value = '';
                    }
                }

                fetch('/api/register/hedgehog', { // Post form data to server
                    method: 'POST',
                    body: formData
                }).then(res => {
                    return res.json();
                }).then(data => {
                    let inputs = {};
                    return this.setState({
                        paymentModal: {
                            display: true,
                            data
                        },
                        inputs
                    });
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }

    /**
     * Check if all inputs in the form are valid
     * @param {function} cb
     * @return {bool}
     */
    formValid(cb) {
        let {inputs} = this.state;
        let valid = true;

        for (let input in inputs) { // For ech input check if they are valid
            let ref = inputs[input].ref;
            ref.focus();
            ref.blur();
        }

        setTimeout(() => { // Allow inputs to update before checking if they are valid
            for (let input in inputs) { // For ech input check if they are valid
                if (inputs.hasOwnProperty(input) && !inputs[input].valid) {
                    valid = false;
                    break;
                }
            }

            cb(null, valid);
        }, 0);
    }

    /**
     * Get the state of each input and store it by name
     * @param {string} name
     * @param {object} state
     * @param {DomNode} ref
     */
    inputState(name, state, ref) {
        /* jshint ignore: start */
        let inputs = this.state.inputs;
        inputs[name] = {
            ...state,
            ref
        }

        this.setState({
            inputs
        });
        /* jshint ignore: end */
    }

    modalClose() {
        this.setState({
            paymentModal: {
                display: false,
                data: {}
            }
        });
    }

    render() {
        let {
            data: paymentData,
            display: displayPayment
        } = this.state.paymentModal;

        return (
            /* jshint ignore: start */
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                <PaymentModal
                    display={displayPayment}
                    data={paymentData}
                    onClose={this.modalClose.bind(this)}
                />

                <h2>
                    Register Hedgehog
                </h2>

                <Form type="horizontal"
                    style={{
                        margin: 'auto',
                        paddingBottom: 15
                    }}

                    referance={node => {
                        this.formRef = node;
                    }}
                    onSubmit={this.submitForm.bind(this)}
                >
                    <Input
                        type="text"
                        name="breeder_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="breeder_affix"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="hedgehog_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
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
                        name="hedgehog_colour"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                    <Input
                        type="file"
                        name="hedgehog_image"
                        parentUpdateState={this.inputState.bind(this)}
                    />

                    <Input
                        type="text"
                        name="sire_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="sire_reg_number"
                        parentUpdateState={this.inputState.bind(this)}
                    />

                    <Input
                        type="text"
                        name="dam_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value:""}).value}
                    />

                    <Input
                        type="text"
                        name="dam_reg_number"
                        parentUpdateState={this.inputState.bind(this)}
                    />

                    <Input
                        type="text"
                        name="previous_owners_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                <Input
                    type="text"
                    name="your_name"
                    required={true}
                    parentUpdateState={this.inputState.bind(this)}
                    value={(this.state.inputs.breeders_email || {value: ""}).value}
                />

                    <textarea
                        cols="25"
                        rows="7"
                        name="owners_address"
                    />

                    <Input
                        type="email"
                        name="previous_owners_email"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                    <Input
                        type="email"
                        name="breeders_email"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeders_email || {value: ""}).value}
                    />

                    <Input
                        type="email"
                        name="your_email"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.your_email || {value: ""}).value}
                    />

                    <button className="uk-button uk-button-primary uk-button-large">
                        Send Registration
                    </button>
                </Form>
            </div>
            /* jshint ignore: end */
        );
    }
}


if(typeof window !== 'undefined' && window.document)  { // If module is on the client side
/* jshint ignore: start */
    ReactDOM.render(
        <RegisterHedgehog />,
        document.getElementById('app')
    );
    /* jshint ignore: end */
}
else {
    module.exports = RegisterHedgehog;
}
