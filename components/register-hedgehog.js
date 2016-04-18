"use strict";

import Promise from 'es6-promise';
import React from 'react';
import Form from './uikit-form';
import DOB from './dob-input';
import ReactDOM from 'react-dom';
import moment from 'moment';
import InputGroup from './input-group';
import Input from './input';
import PaymentModal from './payment-modal';
import FormBase from './form-base';


class RegisterHedgehog extends FormBase {
    constructor() {
        super();
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

                // console.log(inputs);
                //
                // this.setState({
                //     inputs
                // });

                this.setState({
                    paymentModal: {
                        loading: true,
                        display: true,
                        data: this.state.paymentModal.data
                    }
                });

                fetch('/api/register/hedgehog', { // Post form data to server
                    method: 'POST',
                    body: formData
                }).then(res => {
                    return res.json();
                }).then(data => {
                    if(data.error) {
                        this.setState({
                            paymentModal: {
                            /* jshint ignore: start */
                            ...this.state.paymentModal,
                            /* jshint ignore: end */
                                loading: false
                            },
                            error: true
                        });

                        throw data.error;
                    }

                    let inputs = {};
                    return this.setState({
                        paymentModal: {
                            loading: false,
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

    render() {
        let {
            data: paymentData,
            display: displayPayment,
            loading
        } = this.state.paymentModal;

        console.log(this.state.inputs);

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
                    error={this.state.error}
                    loading={loading}
                />

                <h2>
                    Register Hedgehog
                </h2>

                <Form type="horizontal"
                    style={{
                        marginLeft: '20%',
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
                        value={(this.state.inputs.breeder_name || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="breeder_affix"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeder_affix || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="hedgehog_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.hedgehog_name || {value: ""}).value}
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
                            maxDate: moment(new Date()).subtract(2, 'weeks').format("DD.MM.YYYY") //"08.03.15"
                        }}
                        type="dob"
                        required={true}
                    />

                    <Input
                        type="text"
                        name="hedgehog_colour"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.hedgehog_colour || {value: ""}).value}
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
                        value={(this.state.inputs.sire_name || {value: ""}).value}
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
                        value={(this.state.inputs.dam_name || {value:""}).value}
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
                        value={(this.state.inputs.previous_owners_name || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="your_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.your_name || {value: ""}).value}
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
                        value={(this.state.inputs.previous_owners_email || {value: ""}).value}
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
