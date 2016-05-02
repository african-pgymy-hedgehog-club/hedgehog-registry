"use strict";

import 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import FormBase from './form-base';
import PaymentModal from './payment-modal';
import Form from './uikit-form';
import Input from './input';
import DOB from './dob-input';
import moment from 'moment';
import InputGroup from './input-group';

let hogletIDCounter = 1;

class RegisterLitter extends FormBase {
    constructor() {
        super();

        this.state = {
            /* jshint ignore: start */
            ...this.state,
            hoglets: [{
                id: 1,
                name: {
                    value: ''
                }
            }]
            /* jshint ignore: end */
        };
    }

    /**
     * Send form data to server and use json response for payal payment details in payment modal
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

                this.setState({
                    paymentModal: {
                        loading: true,
                        display: true,
                        data: this.state.paymentModal.data
                    }
                });

                fetch('/api/register/litter', {
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
                        hoglets: [{
                            id: 1,
                            name: {
                                value: ''
                            },
                            owner_address: {
                                value: ''
                            }
                        }],
                        inputs
                    });
                });
            }
        });
    }

    addHoglet() {
        ++hogletIDCounter;

        let hoglets = this.state.hoglets.map((hoglet) => {
            return {
                ...hoglet,
            };
        });

        this.setState({
            hoglets: [
                ...hoglets,
                {
                    id: hogletIDCounter,
                    visible: true,
                    name: {
                        value: ''
                    }
                }
            ]
        });
    }

    removeHoglet(hogletID) {
        let hoglets = this.state.hoglets.filter(({ id }) => hogletID !== id);

        this.setState({hoglets});
    }

    /**
     * Get the state of each hoglet's inputs and store it by name
     * @param {number} id
     * @param {string} name
     * @param {object} state
     * @param {DomNode} ref
     */
    hogletState(id, name, state, ref) {
        name = name.replace('hoglet_', '');
        let hoglets = this.state.hoglets.map((hoglet, index) => {
            if(hoglet.id === id) {
                hoglet[name] = {
                    ref,
                    ...state
                };
            }

            return hoglet;
        });

        this.setState({hoglets});
    }

    /**
     * Create jsx inputs for each hoglet
     */
    hogletInputs() {
        let hogletInputs = [];

        this.state.hoglets.forEach(({id, name, visible}, hogletIndex) => {
            if(id > 1) {
                let removeHedgehog = (
                    <InputGroup onClick={() => {
                        this.removeHoglet(id);
                    }} key={id}>
                        <i className="uk-icon-times-circle"
                            style={{
                                color: '#d00',
                                marginRight: 10,
                                cursor: 'pointer'
                            }}
                            data-id={id}
                        ></i>
                        <span style={{ cursor: 'pointer' }}>Remove Hedgehog</span>
                    </InputGroup>
                );

                hogletInputs.push(removeHedgehog);
            }

            this.hogletInputTypes(id, hogletIndex, hogletInputs)

            return;
        });

        return hogletInputs;
    }

    hogletInputTypes(id, hogletIndex, hogletInputs) {
        const HOGLET_INPUT_TYPES = [
            'name',
            'gender',
            'colour',
            'image',
            'owner_name',
            'owner_address',
            'hr'
        ];

        let inputElements = HOGLET_INPUT_TYPES.map((inputType, index) => {
            let element;

            if(inputType == 'name' || inputType == 'colour' || inputType == 'owner_name') {
                element = (
                    <Input
                        key={`${id}${index}`}
                        type="text"
                        name={`hoglet_${inputType}`}
                        parentUpdateState={this.hogletState.bind(this, id)}
                        value={(this.state.hoglets[hogletIndex][inputType] || {value: ''}).value}
                        required={((inputType != 'owner_name') ? true : false)}
                    />
                );
            }
            else if(inputType == 'gender') {
                element = (
                    <select name="hedgehog_gender" key={`${id}${index}`}>
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                    </select>
                );
            }
            else if(inputType == 'image') {
                element = (
                    <Input
                        key={`${id}${index}`}
                        type="file"
                        name={`image`}
                        parentUpdateState={this.hogletState.bind(this, id)}
                    />
                );
            }
            else if(inputType == 'owner_address') {
                element = (
                    <textarea
                        key={`${id}${index}`}
                        cols="25"
                        rows="5"
                        name={inputType}
                        data-id={id}
                    >
                    </textarea>
                );
            }
            else if(inputType == 'hr' && this.state.hoglets.length > 1) {
                element = (
                    <hr key={`${id}${index}`} />
                );
            }

            if(element) {
                hogletInputs.push(element);
            }

            return element
        });

        return inputElements;
    }


    render() {
        let {
            data: paymentData,
            display: displayPayment,
            loading
        } = this.state.paymentModal;

        // console.log(this.state.hoglets);

        // console.log(moment(new Date()).subtract(4, 'months').format('DD.MM.YYYY'));

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
                    Register Litter
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
                        parentUpdateState={this.inputState.bind(this)}
                        required={true}
                        value={(this.state.inputs.breeder_name || {value: ''}).value}
                    />
                    <Input
                        type="text"
                        name="breeder_affix"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeder_affix || {value: ''}).value}
                    />
                    <DOB
                        name="date_of_birth"
                        data={{
                            format: "DD/MM/YYYY",
                            minDate: moment(new Date()).subtract(3, 'years').format("DD.MM.YYYY"),
                            maxDate: moment(new Date()).subtract(2, 'weeks').format("DD.MM.YYYY")
                        }}
                        type="dob"
                        required={true}
                    />

                    <InputGroup onClick={this.addHoglet.bind(this)}>
                        <i className="uk-icon-plus-circle"
                            style={{
                                color: '#0d0',
                                marginRight: 10,
                                cursor: 'pointer'
                            }}
                        ></i>
                        <span style={{ cursor: 'pointer' }}>Add Hedgehog</span>
                    </InputGroup>

                    {this.hogletInputs()}

                    <Input
                        type="text"
                        name="sire_name"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.sire_name || {value: ''}).value}
                        required={true}
                    />

                    <Input
                        type="text"
                        name="sire_reg_number"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.sire_reg_number || {value: ''}).value}
                    />

                    <Input
                        type="text"
                        name="dam_name"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.dam_name || {value: ''}).value}
                        required={true}
                    />

                    <Input
                        type="text"
                        name="dam_reg_number"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.dam_reg_number || {value: ''}).value}
                    />

                    <Input
                        type="text"
                        name="your_name"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.your_name || {value: ''}).value}
                        required={true}
                    />

                    <Input
                        type="text"
                        name="your_email"
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.your_email || {value: ''}).value}
                        required={true}
                    />

                    <InputGroup>
                        <button
                            className="uk-button uk-button-primary uk-button-large"
                            style={{ marginRight: 15 }}
                        >
                            Send Registration
                        </button>

                        {/*<button className="uk-button uk-button-primary uk-button-large">
                            Rest Form
                        </button>*/}
                    </InputGroup>

                </Form>
            </div>
            /* jshint ignore: end */
        );
    }
}

if(typeof window !== 'undefined' && window.document)  { // If module is on the client side
/* jshint ignore: start */
    ReactDOM.render(
        <RegisterLitter />,
        document.getElementById('app')
    );
    /* jshint ignore: end */
}
else {
    module.exports = RegisterLitter;
}
