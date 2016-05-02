import React from 'react';

const UIkitForm = ({
    type,
    onSubmit,
    children,
    style = {},
    referance,
    action = null
}) => {
    const TYPES_WITH_LABELS = [
        'input',
        'Input',
        'text',
        'email',
        'select',
        'DOB',
        'dob',
        'file',
        'textarea'
    ];

    let className = `uk-form uk-form-${type}`;

    if(children === undefined) {
        throw new Error("Input Children must be passed to UIkit Form");
    }

    children = (!Array.isArray(children) ? [children] : children);

    return (
        /* jshint ignore: start */
        <form className={className} onSubmit={onSubmit} style={style} ref={referance} method='POST' action={action}>
            {children.map((input, index) => { // For each child input
                input = (!Array.isArray(input) ? [input] : input); // Make sure input is an array to make dealing with array inputs easier

                return input.map((input, index1) => { // Incase there are dynamic arrays of children inputs
                    let {name} = input.props
                    let type = input.props.type || input.type;
                    if(type == 'Input') {
                        if(input.props.type == 'hidden') {
                            type = 'hidden';
                        }

                        if(input.props.type == 'submit') {
                            type = 'submit';
                        }
                    }

                    if(TYPES_WITH_LABELS.indexOf(type) !== -1) { // If the type of form input if in the types array
                        input = (
                            <div className="uk-form-row" key={`${index}${index1}`}>
                                <label className="uk-form-label" htmlFor={name}>
                                    {/* Replace _ with a space and for each space change the first letter after to uppercase */}
                                    {name.replace(/([\d]+)/g, '').replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase()).replace(/([\d])+/g, '')}:
                                </label>
                                <div className="uk-form-controls">
                                    {input}
                                </div>
                            </div>
                        );
                    }
                    else if(type !== 'hidden' && type !== 'submit' && type !== 'hr') {
                        input = (
                            <div className="uk-form-row" key={`${index}${index1}`}>
                                <div className="uk-form-controls">
                                    {input}
                                </div>
                            </div>
                        );
                    }
                    else {
                        input = (
                        <div className="uk-form-row" key={`${index}${index1}`}>
                            {input}
                        </div>
                        );
                    }

                    return input;
                });
            })}
        </form>
        /* jshint ignore: end */
    );
};

export default UIkitForm;
