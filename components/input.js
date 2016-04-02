import React from 'react';

export default class Input extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            valid: true,
            invalidMessage: '',
            value: props.value || ''
        };
    }

    componentDidMount() {
        let {name, parentUpdateState} = this.props;
        let {input: ref} = this.refs;

        if(parentUpdateState) {
            parentUpdateState(name, this.state, ref);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let {name, parentUpdateState} = this.props;
        let {input: ref} = this.refs;


        if(prevState.valid !== this.state.valid && parentUpdateState) {
            parentUpdateState(name, this.state, ref);
        }
    }


    componentWillReceiveProps(newProps) {
        let {value} = newProps;

        if(value == '') {
            this.setState({
                value
            });
        }
    }

    /**
     * Validate input values against types of input
     * @param {object} e
     */
    validate(e) {
        let {type, name} = this.props;
        let required = this.props.required || false;
        name = name.replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase());
        let {value} = this.refs.input;

        switch (type) {
            case 'text':
                    if(value.length < 2 && required) {
                        this.setState({
                            valid: false,
                            invalidMessage: `${name} is not valid`,
                            value
                        });
                    }
                    else {
                        this.setState({
                            valid: true,
                            invalidMessage: '',
                            value
                        });
                    }

                break;

            case 'email':
                let email =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!email.test(value)) {
                    this.setState({
                        valid: false,
                        invalidMessage: `${name} is not valid`,
                        value
                    });
                }
                else if(value.length < 2 && required) {
                    this.setState({
                        valid: false,
                        invalidMessage: `${name} is not valid`,
                        value
                    });
                }
                else {
                    this.setState({
                        valid: true,
                        invalidMessage: '',
                        value
                    });
                }

                break;

            case 'date':
                let date = /^([0-9]+-{2}[0-9]+-{2}[0-9]{4})?$/;
                if(!date.test(value)) {
                    this.setState({
                        valid: false,
                        invalidMessage: `${name} is not valid`,
                        value
                    });
                }
                else if(value.length < 2 && required) {
                    this.setState({
                        valid: false,
                        invalidMessage: `${name} is not valid`,
                        value
                    });
                }
                else {
                    this.setState({
                        valid: true,
                        invalidMessage: '',
                        value
                    });
                }

                break;
        }
    }

    /**
     * Create and return input element
     * @param {object} style
     * @return {jsx}
     */
    input(style) {
        let {
            type,
            name,
            className
        } = this.props;
        let require = this.props.required || undefined;
        type = (type == 'email' ? 'text' : type);
        style = {
            ...style,
            ...this.props.style
        }

        return (
            <input
                style={style}
                type={type}
                name={name}
                className={className}
                ref="input"
                onChange={e => this.setState({
                    value: this.refs.input.value
                })}
                onBlur={e => this.validate(e)}
                value={this.state.value}
            />
        );
    }

    /**
     * Create invalid error message and input element
     * @return {jsx}
     */
    invalid() {
        let {type, name} = this.props;
        let require = this.props.required || undefined;
        let style = {
            border: "1px solid #f00"
        };

        return (
            <div>
                {this.input(style)}
                <div className="validate">
                    {this.state.invalidMessage}
                </div>
            </div>
        );
    }

    render() {
        let isValid = this.state.valid;

        return (
            isValid ?
                this.input() :
                this.invalid()
        )

    }
}
