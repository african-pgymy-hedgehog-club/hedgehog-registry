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
import HogType from './hog-type';
import PetOnly from './pet-only';

let i = 0;

class RegisterHedgehog extends FormBase {
    constructor() {
        super();
        this.radioRef0;
        this.radioRef1
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

            // console.log(this.state.inputs);
            // console.log({valid});

            if(valid) {
                let formData = new FormData(this.formRef);
                if (this.state.inputs.import_hedgehog && this.state.inputs.import_hedgehog.value === 1) {
                    formData.set("import_hedgehog", 'Yes');
                } else {
                    formData.delete("import_hedgehog");
                }

                // console.log(this.state.inputs);
                //
                // this.setState({
                //     inputs
                // });

                // console.log({importHedgehog: formData.get("import_hedgehog")});

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
                                ...this.state.paymentModal,
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
                    // logError(err, 'componenet/register-hedgehog.js');
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

        // console.log(this.state.inputs);

        return (
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
                    <div label="Import Hedgehog">
                        <span style={{marginRight: 20}}>
                            <input type="radio" ref={ref => this.radioRef0 = ref} name="import_hedgehog" onChange={() => {
                              this.setState(state => ({
                                  ...state,
                                  inputs: {
                                      ...state.inputs,
                                      "import_hedgehog": {
                                        value: 0,
                                        ref: this.radioRef0,
                                        valid: true
                                      }
                                  }
                              }))
                            }} checked={(this.state.inputs.import_hedgehog || {value: 0}).value === 0} value="0" /> No
                        </span>
                        <input type="radio" ref={ref => this.radioRef1 = ref} name="import_hedgehog" onChange={() => {
                          this.setState(state => ({
                              ...state,
                              inputs: {
                                  ...state.inputs,
                                  "import_hedgehog": {
                                    value: 1,
                                    ref: this.radioRef1,
                                    valid: true
                                  }
                              }
                          }))
                        }} checked={(this.state.inputs.import_hedgehog || {value: 0}).value === 1} value="0" /> Yes
                    </div>

                    <HogType name="hog_type" />

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
                            minDate: moment(new Date()).subtract(5, 'years').format("YYYY-MM-DD"),
                            maxDate: moment(new Date()).subtract(2, 'weeks').format("YYYY-MM-DD")
                        }}
                        type="dob"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.date_of_birth || { value: "" }).value}

                    />

                    <PetOnly
                        label="Pet Only"
                        name="pet_only"
                        explanation="Hedgehog is a pet and not to be bred from without the breeders permission"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.pet_only || {value: ''}).value}
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
                        type={(this.state.inputs.import_hedgehog || {value: 0}).value === 1 ? "file" : "hidden"}
                        name="import_certificate"
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
                    >
                        {(this.state.inputs.owners_address || {value: ""}).value}
                    </textarea>

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
