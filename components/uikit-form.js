import React from 'react';

const UIkitForm = ({
    type,
    onSubmit,
    children,
    style = {},
    referance,
    action = null
}) => {
    let className = `uk-form uk-form-${type}`;

    if(children === undefined) {
        throw new Error("Input Children must be passed to UIkit Form");
    }

    children = (!Array.isArray(children) ? [children] : children);

    return (
        /* jshint ignore: start */
        <form className={className} onSubmit={onSubmit} style={style} ref={referance} method='POST' action={action}>
            {children.map((input, index) => {
                let {name} = input.props
                let typesWithLabels = [
                    'input',
                    'Input',
                    'text',
                    'email',
                    'select',
                    'DOB',
                    'textarea'
                ];
                let type = input.props.type || input.type;
                if(type == 'Input') {
                    if(input.props.type == 'hidden')
                        type = 'hidden';

                    if(input.props.type == 'submit')
                        type = 'submit';
                }

                console.log("input", input);

                if(typesWithLabels.indexOf(type) !== -1) { // If the type of form input if in the types array

                    input = (
                        <div className="uk-form-row" key={index}>
                            <label className="uk-form-label" htmlFor={name}>
                                {/* Replace _ with a space and for each space change the first letter after to uppercase */}
                                {name.replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase())}:
                            </label>
                            <div className="uk-form-controls">
                                {input}
                            </div>
                        </div>
                    );
                }
                else if(type !== 'hidden' && type !== 'submit') {
                    input = (
                        <div className="uk-form-row" key={index}>
                            <div className="uk-form-controls">
                                {input}
                            </div>
                        </div>
                    );
                }

                return input;
            })}
        </form>
        /* jshint ignore: end */
    );
};

export default UIkitForm;
