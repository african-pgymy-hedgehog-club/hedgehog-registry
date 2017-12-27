import React, {Component} from 'react';

export default class FormBase extends Component {
    constructor(props) {
        super(props);

        this.formRef;
        this.state = {
            paymentModal: {
                lading: false,
                display: false,
                data: {}
            },
            inputs: {},
            error: false
        };
    }

    /**
     * Check if all inputs in the form are valid
     * @param {function} cb
     * @return {bool}
     */
    formValid(cb) {
        let {inputs} = this.state;
        let valid = true;

        for (let input in inputs) { // For ech input check if they are valid
            let ref = inputs[input].ref;
            ref.focus();
            ref.blur();
        }

        setTimeout(() => { // Allow inputs to update before checking if they are valid
            for (let input in inputs) { // For ech input check if they are valid
                if (inputs.hasOwnProperty(input) && !inputs[input].valid) {
                    valid = false;
                    break;
                }
            }

            cb(null, valid);
        }, 0);
    }

    /**
     * Get the state of each input and store it by name
     * @param {string} name
     * @param {object} state
     * @param {DomNode} ref
     */
    inputState(name, state, ref) {
        /* jshint ignore: start */

        let inputs = this.state.inputs;
        inputs[name] = {
            ...state,
            ref,
            value: ref.value
        };

        this.setState({
            inputs
        });

        /* jshint ignore: end */
    }

    /**
     * Close modal by changing display state
     */
    modalClose() {
        this.setState({
            paymentModal: {
                display: false,
                data: {}
            },
            submitModal: { display: false },
            error: false
        });
    }

}
