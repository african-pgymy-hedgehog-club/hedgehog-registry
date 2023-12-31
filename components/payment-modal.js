import React from "react";
import Modal from "react-modal";
import Form from "./uikit-form";
import Input from "./input";

String.prototype.capitalizeFirst = function () {
    return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
};

String.prototype.ucwords = function () {
    return this.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
};

// TODO: Add submitting form loader and display error then close after 3 seconds if an error occurs

/**
 * Display either loading animation or error message and then close after 5 seconds
 */
const displayloadingOrError = (loading, { error, onClose }) => {
    let display;
    if (loading) {
        display = (
            <div>
                <h3>Loading...</h3>
                <img src="/images/loader.gif" />
            </div>
        );
    } else if (error) {
        setTimeout(() => {
            // After 5 seconds close the modal
            onClose();
        }, 5000);

        display = <h2>Sorry for the inconvenience but an error occurred</h2>;
    }

    return display;
};

const PaymentModal = ({
    display,
    onClose,
    loading,
    error,
    data: {
        ppURL = "https://www.paypal.com/cgi-bin/websrc",
        ppAccount = "registry@aphclub.co.uk",
        name,
        type,
        hogCount = 1,
    },
}) => {
    let description = "";
    let amount = 1 * hogCount;
    if (type == "update ownership") {
        description = `
            Thankyou for requesting a change of ownership with the African Pygmy Hedgehog Club,
            please click the button below to pay £1 for your ownership change
        `;
    } else {
        description = `
            Thank you for registering your ${type} with the African Pygmy Hedgehog Club Registry,
            please click the button below to pay £${
                type == "litter" ? `${amount} (£1 per hoglet)` : "1"
            } for your registration
         `;
    }

    return (
        <Modal
            isOpen={display}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
                content: {
                    backgroundColor: "rgb(118, 129, 210)",
                    width: "550px",
                    height: "170px",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    borderRadious: 5,
                    transform: "translate(-50%, -50%)",
                    overflow: "none",
                    zIndex: 999,
                },
            }}
            contentLabel="payment modal"
        >
            {loading || error ? (
                displayloadingOrError(loading, { error, onClose })
            ) : (
                <div>
                    <div id="modal-title">
                        {(type || "").replace(/\b[a-z]/g, (letter) =>
                            letter.toUpperCase()
                        )}{" "}
                        Payment
                        <span id="modal-close" onClick={onClose}>
                            <i className="uk-icon uk-icon-times" />
                        </span>
                    </div>

                    <p>{description}</p>

                    <Form type="horizontal" action={ppURL}>
                        <Input type="hidden" name="cmd" value="_cart" />

                        <Input type="hidden" name="upload" value="1" />

                        <Input
                            type="hidden"
                            name="business"
                            value={ppAccount}
                        />

                        <Input
                            type="hidden"
                            name="item_name_1"
                            value={`${name} ${type} registration`.ucwords()}
                        />

                        <Input type="hidden" name="amount_1" value="1" />

                        <Input
                            type="hidden"
                            name="quantity_1"
                            value={hogCount}
                        />

                        <Input type="hidden" name="rm" value="2" />

                        <Input
                            type="hidden"
                            name="cbt"
                            value="Return to Hedgehog Registry"
                        />

                        <Input
                            type="hidden"
                            name="cancel_return"
                            value="http://hedgehogregistry.co.uk"
                        />

                        <Input type="hidden" name="lc" value="GB" />

                        <Input type="hidden" name="currency_code" value="GBP" />

                        <Input
                            className="uk-button uk-button-primary"
                            style={{ color: "rgb(255, 255, 255)" }}
                            type="submit"
                            name="submit_paypal_payment"
                            value={`Pay for your ${type} registration`}
                        />
                    </Form>
                </div>
            )}
        </Modal>
    );
};

export default PaymentModal;
