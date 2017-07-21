"use strict";

import Promise from 'es6-promise';
import Form from './uikit-form';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Input from './input';
import FormBase from './form-base';

class RegisterHedgehog extends FormBase {
    constructor() {
        super();

        this.state.displayModal = false;
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

                this.setState({
                    displayModal: true,
                    loadingModal: true
                });

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

                        console.error(data.error);
                    }

                    let inputs = {};
                    this.setState({
                        inputs,
                        displayModal: true,
                        loadingModal: false
                    });

                    setTimeout(() => this.setState({ displayModal: false }), 3500);
                }).catch(err => {
                    // logError(err, 'componenet/register-hedgehog.js');
                    console.error(err);
                });
            }
        });
    }

    /**
     * Display modal loadin or error and set timeout to close
     * @param {bool} loading
     * @param {bool} error
     * @return jsx
     */
    modalLoadingError(loading, error) {
        let display;
        if(loading) {
            display = (
                <div>
                    <h3>Loading...</h3>
                    <img src="/images/loader.gif" />
                </div>
            );
        } else if(error) {
            setTimeout(() => this.setState({ displayModal: false, error: false }), 5000);
            display = (
                <h2>Sorry for the inconvenience but an error occurred</h2>
            );
        }

        return display;
    }

    render() {
        // console.log(this.state.inputs);

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            <Modal
                contentLabel="modal"
                isOpen={this.state.displayModal}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor : 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        backgroundColor: 'rgb(118, 129, 210)',
                        width: '550px',
                        height: '140px',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        borderRadious: 5,
                        transform: 'translate(-50%, -50%)',
                        overflow: 'none',
                        zIndex: 999
                    }
                }}
            >
                {this.state.error || this.state.loadingModal ?
                        this.modalLoadingError(this.state.loadingModal, this.state.error)
                    : (
                        <h3>We will contact you to let you know which of your affix choices is available</h3>
                    )
                }
            </Modal>

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
