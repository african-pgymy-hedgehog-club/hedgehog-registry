"use strict";

require('es6-promise').polyfill();
import React from 'react';
import ReactDOM from 'react-dom';
import FormBase from './form-base';
import PaymentModal from './payment-modal';
import Form from './uikit-form';
import Input from './input';
import DOB from './dob-input';
import moment from 'moment';

let hogletIDCounter = 0;

class RegisterLitter extends FormBase {
    constructor() {
        super();

        this.state = {
            /* jshint ignore: start */
            ...this.state,
            hoglets: [{
                id: 1,
                name: 'test',
                colour: '',
            }]
            /* jshint ignore: end */
        };
    }

    hogletInputs() {
        const HOGLET_INPUT_TYPES = [
            'name',
            'gender',
            'colour',
            'image',
            'hr'
        ];

        let hogletInputs = [];
        this.state.hoglets.map(({id, name}) => {
            /* jshint ignore: start */
            return HOGLET_INPUT_TYPES.map((inputType, index) => {
                let element;

                if(inputType == 'name' || inputType == 'colour') {
                    element = (
                        <Input
                            type="text"
                            name={`hoglet_${inputType}${id}`}
                            parentUpdateState={this.inputState.bind(this)}
                            value={(this.state.inputs[`hoglet${inputType}${id}`] || {value: ''}).value}
                        />
                    );
                }
                else if(inputType == 'gender') {
                    element = (
                        <select name={`hedgehog_gender${id}`}>
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
                            type="file"
                            name={`hedgehog_image${id}`}
                            parentUpdateState={this.inputState.bind(this)}
                        />
                    );
                }
                else if(inputType == 'hr' && this.state.hoglets.length > 1) {
                    element = (
                        <hr />
                    );
                }

                if(element) { // If
                    hogletInputs.push(element);
                }

                return element
            });
            /* jshint ignore: end */
        });

        return hogletInputs;
    }

    render() {
        let {
            data: paymentData,
            display: displayPayment,
            loading
        } = this.state.paymentModal;

        console.log(moment(new Date()).subtract(4, 'months').format('DD.MM.YYYY'));

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
                        marginLeft: '20%',
                        paddingBottom: 15
                    }}
                    referance={node => {
                        this.form = node;
                    }}
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
                            format: "DD/MM/YY",
                            minDate: moment(new Date()).subtract(5, 'months').format("DD.MM.YYYY"),
                            maxDate: moment(new Date()).subtract(2, 'weeks').format("DD.MM.YYYY")
                        }}
                        type="dob"
                        required={true}
                    />

                    {this.hogletInputs()}


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
