"use strict";

import Promise from "es6-promise";
import React from "react";
import Form from "./uikit-form";
import DOB from "./dob-input";
import ReactDOM from "react-dom";
import moment from "moment";
import InputGroup from "./input-group";
import Input from "./input";
import PaymentModal from "./payment-modal";
import FormBase from "./form-base";
import HogType from "./hog-type";
import PetOnly from "./pet-only";

let i = 0;

class UpdateOwnership extends FormBase {
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
            if (err) {
                console.error(err);
            }

            if (valid) {
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
                        data: this.state.paymentModal.data,
                    },
                });

                fetch("/api/register/update-ownership", {
                    // Post form data to server
                    method: "POST",
                    body: formData,
                })
                    .then((res) => {
                        return res
                            .clone()
                            .json()
                            .catch((err) => {
                                res.text().then((text) => {
                                    console.log(
                                        "JSON error:",
                                        err,
                                        "Returned text:",
                                        text
                                    );
                                });
                            });
                    })
                    .then((data) => {
                        if (data.error) {
                            this.setState({
                                paymentModal: {
                                    ...this.state.paymentModal,
                                    loading: false,
                                },
                                error: true,
                            });

                            throw data.error;
                        }

                        let inputs = {};
                        return this.setState({
                            paymentModal: {
                                loading: false,
                                display: true,
                                data,
                            },
                            inputs,
                        });
                    })
                    .catch((err) => {
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
            loading,
        } = this.state.paymentModal;

        // console.log(this.state.inputs);

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <PaymentModal
                    display={displayPayment}
                    data={paymentData}
                    onClose={this.modalClose.bind(this)}
                    error={this.state.error}
                    loading={loading}
                />

                <h2>Update Ownership</h2>

                <Form
                    type="horizontal"
                    style={{
                        marginLeft: "20%",
                        marginRight: "20%",
                        paddingBottom: 15,
                    }}
                    referance={(node) => {
                        this.formRef = node;
                    }}
                    onSubmit={this.submitForm.bind(this)}
                >
                    <Input
                        type="text"
                        name="hedgehog_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.hedgehog_name || { value: "" })
                                .value
                        }
                    />

                    <Input
                        type="text"
                        name="reg_number"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.reg_number || { value: "" })
                                .value
                        }
                    />

                    <DOB
                        name="date_of_birth"
                        data={{
                            format: "DD/MM/YYYY",
                            minDate: moment(new Date())
                                .subtract(5, "years")
                                .format("YYYY-MM-DD"),
                            maxDate: moment(new Date())
                                .subtract(2, "weeks")
                                .format("YYYY-MM-DD"),
                        }}
                        type="dob"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.date_of_birth || { value: "" })
                                .value
                        }
                    />

                    <Input
                        type="text"
                        name="new_owner_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.new_owner_name || { value: "" })
                                .value
                        }
                    />

                    <textarea
                        cols="25"
                        rows="7"
                        name="new_owners_address"
                        required={true}
                    >
                        {
                            (
                                this.state.inputs.new_owners_address || {
                                    value: "",
                                }
                            ).value
                        }
                    </textarea>

                    <Input
                        type="email"
                        name="new_owner_email"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.new_owner_email || { value: "" })
                                .value
                        }
                    />

                    <Input
                        type="text"
                        name="your_name"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.your_name || { value: "" }).value
                        }
                    />

                    <Input
                        type="email"
                        name="your_email"
                        required={true}
                        parentUpdateState={this.inputState.bind(this)}
                        value={
                            (this.state.inputs.your_email || { value: "" })
                                .value
                        }
                    />

                    <Input
                        type="file"
                        name="hedgehog_image"
                        parentUpdateState={this.inputState.bind(this)}
                    />

                    <button className="uk-button uk-button-primary uk-button-large">
                        Send Registration
                    </button>
                </Form>
            </div>
        );
    }
}

if (typeof window !== "undefined" && window.document) {
    // If module is on the client side
    ReactDOM.render(<UpdateOwnership />, document.getElementById("app"));
} else {
    module.exports = UpdateOwnership;
}
