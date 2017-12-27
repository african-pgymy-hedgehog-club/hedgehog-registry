import React from 'react';
import Modal from 'react-modal';
import Form from './uikit-form';
import Input from './input';

String.prototype.capitalizeFirst = function () {
    return `${this.charAt(0).toUpperCase()}${this.slice(1)}`;
};

String.prototype.ucwords = function () {
    return this.replace(/\b[a-z]/g, letter => letter.toUpperCase());
};

// TODO: Add submitting form loader and display error then close after 3 seconds if an error occurs

/**
 * Display either loading animation or error message and then close after 5 seconds
 */
const displayloadingOrError = (loading, {error, onClose}) => {
    let display;
    if(loading) {
        display = (
            <div>
                <h3>Loading...</h3>
                <img src="/images/loader.gif" />
            </div>
        );
    }
    else if(error) {
        setTimeout(() => { // After 5 seconds close the modal
            onClose();
        }, 5000);

        display = (
            <h2>Sorry for the inconvenience but an error occurred</h2>
        );
    }

    return display;
};

const SubmitModal = ({
    display,
    onClose,
    loading,
    error,
    form
}) => {
    let description = `Successfully submitted ${form} form`;

    return (
        <Modal
            isOpen={display}
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
                    height: '170px',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    borderRadious: 5,
                    transform: 'translate(-50%, -50%)',
                    overflow: 'none',
                    zIndex: 999
                },
            }}
            contentLabel="submit modal"
        >
            {(loading || error) ?
                displayloadingOrError(loading, {error, onClose})
                : (<div>
                    <div id="modal-title">
                        {(form || '').replace( /\b[a-z]/g, letter => letter.toUpperCase() )}  {!form.includes('health') ? 'Payment' : ''}
                        <span id="modal-close" onClick={onClose}>
                            <i className="uk-icon uk-icon-times"></i>
                        </span>
                    </div>

                    <p>{description}</p>
                </div>
            )}
        </Modal>
    );
};

export default SubmitModal;
