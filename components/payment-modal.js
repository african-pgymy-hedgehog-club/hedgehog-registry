import React from 'react';
import Modal from 'react-modal';
import Form from './uikit-form';
import Input from './input';

const PaymentModal = ({
    display,
    data: {
    ppURL = 'https://www.paypal.com/cgi-bin/websrc',
    ppAccount = 'registrations@hedgehogregistry.co.uk',
    breederName,
    type
}}) => (
    /* jshint ignore: start */
    <Form type="horizontal"
        action="https://www.paypal.com/cgi-bin/webscr"
        style={{
            display: (
                display ?
                    'block'
                    :
                    'none'
            )
        }}
    >
        <Input
            type="hidden"
            name="cmd"
            value="_cart"
        />

        <Input
            type="hidden"
            name="upload"
            value="1"
        />

        <Input
            type="hidden"
            name="business"
            value={ppAccount}
        />

        <Input
            type="hidden"
            name="item_name_1"
            value={`${breederName} ${type}`}
        />

        <Input
            type="hidden"
            name="amount_1"
            value='1'
        />

        <Input
            type="hidden"
            name="quantity_1"
            value='1'
        />

        <Input
            type="hidden"
            name="image_url"
            value="http://hedgehogregistry.co.uk"
        />

        <Input
            type="hidden"
            name="rm"
            value='2'
        />

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

        <Input
            type="hidden"
            name="lc"
            value="GB"
        />

        <Input
            type="hidden"
            name="currency_code"
            value="GBP"
        />

        <Input
            type="submit"
            name="submit_paypal_payment"
            value={`Click this button to pay for your ${type} registration`}
        />
    </Form>
    /* jshint ignore: end */
);

export default PaymentModal;
