"use strict";

import Promise from 'es6-promise';
import React from 'react';
import Form from './uikit-form';
import DOB from './dob-input';
import ReactDOM from 'react-dom';
import moment from 'moment';
import InputGroup from './input-group';
import Input from './input';
import SubmitModal from './submit-modal';
import FormBase from './form-base';
import HogType from './hog-type';
import Notify from 'react-uikit-notify';
import uikit from 'react-uikit-notify/node_modules/react-uikit-base';
import velocity from 'velocity-animate';

let i = 0;

class RegisterHedgehog extends FormBase {
    constructor() {
        super();

        this.state.submitModal = this.state.paymentModal;
        this.state.notify = false;
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
                    submitModal: {
                        loading: true,
                        display: true
                    }
                });

                fetch('/api/health/form', { // Post form data to server
                    method: 'POST',
                    body: formData
                }).then(res => res.json()).then(({error = false}) => {
                    if(error) {
                        this.setState({
                            submitModal: {
                                ...this.state.submitModal,
                                loading: false
                            },
                            error: true
                        });

                        throw new Error(data.error);
                    }

                    let inputs = {};
                    return this.setState({
                        submitModal: {
                            loading: false,
                            display: false,
                        },
                        notify: true,
                        inputs
                    });
                }).catch(err => {
                    this.setState({
                        submitModal: {
                            ...this.state.submitModal,
                            loading: false
                        },
                        error: true
                    });
                    
                    console.error(err);
                });
            }
        });
    }

    notifyIn(kitid) {
        const element = uikit.helpers.getElement(kitid);

        velocity(
            element,
            {
                opacity: [1, 0],
                translateY: [0, -300]
                
            },
            { display: 'block' }
        );
    }

    notifyOut(kitid) {
        const element = uikit.helpers.getElement(kitid);

        velocity(
            element,
            {
                opacity: [0, 1],
                translateY: [-300, 0]
            },
            {display: 'block'}
        );
    }

    notifyClose(e, kitid) {
        e.preventDefault();
        const element = uikit.helpers.getElement(kitid);

        velocity(
            element,
            {
                opacity: [0, 1],
                translateY: [-300, 0]
            },
            { display: 'none' }
        );
    }

    render() {
        let {
            data: paymentData,
            display: displaySubmit,
            loading,
        } = this.state.submitModal;

        // console.log(this.state.inputs);

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                <SubmitModal
                    display={displaySubmit}
                    form="health"
                    onClose={this.modalClose.bind(this)}
                    error={this.state.error}
                    loading={loading}
                />

                {this.state.notify ? 
                    <Notify
                        kitid='notify1'
                        pos="top-center"
                        messages={[{
                            kitid: 'message_0',
                            message: "Successfully submitted health form",
                            timeout: 0,
                            context: 'success',
                            animate: {
                                in: kitid => this.notifyIn(kitid),
                                out: kitid => this.notifyOut(kitid)
                            },
                            onClick: e => this.notifyClose(e, 'message_0'),
                        }]}
                    />
                    : ''
                }

                <h2>
                    Health
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

                    <HogType name="hog_type" />

                    <Input
                        type="text"
                        name="owners_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.owners_name || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="hedgehog_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.hedgehog_name || {value: ""}).value}
                    />

                    <Input
                        type="text"
                        name="registration_number"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.registration_number || {value: ""}).value}
                    />

                    <select name="hedgehog_gender">
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                    </select>


                    <Input
                        type="number"
                        name="age"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.age || {value: ""}).value}
                    />

                    <textarea
                        cols="25"
                        rows="7"
                        name="health_issues"
                        required={true}
                    >
                        {(this.state.inputs.health_issues || {value: ""}).value}
                    </textarea>

                    <Input
                        type="email"
                        name="owners_email"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={(this.state.inputs.owners_email || {value: ""}).value}
                    />

                    <button className="uk-button uk-button-primary uk-button-large">
                        Send Health Form
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
