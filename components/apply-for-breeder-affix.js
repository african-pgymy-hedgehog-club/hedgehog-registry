"use strict";

import Promise from 'es6-promise';
import Form from './uikit-form';
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
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

                fetch('/api/register/apply-for-breeder-affix', { // Post form data to server
                    method: 'POST',
                    body: formData
                }).then(res => {
                    return res.json();
                }).then(data => {
                    if(data.error) {
                        this.setState({
                            error: true
                        });

                        throw data.error;
                    }

                    let inputs = {};
                    return this.setState({
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
        // console.log(this.state.inputs);

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                <h2>
                    Apply For Breeder Affix
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
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.breeder_affix || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="affix_choice_1"
                        minlength="3"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.affix_choice_1 || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="affix_choice_2"
                        minlength="3"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.affix_choice_2 || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="your_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.your_name || {value: ""}).value}
                    />

                    <Input
                        type="email"
                        name="your_email"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.your_email || {value: ""}).value}
                    />

                    <button className="uk-button uk-button-primary uk-button-large">
                        Apply For Affix
                    </button>
                </Form>
            </div>
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
