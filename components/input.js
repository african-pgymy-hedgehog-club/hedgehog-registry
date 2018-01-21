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

        if(typeof(parentUpdateState) == 'function') {
            parentUpdateState(name, this.state, ref);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let {name, parentUpdateState} = this.props;
        let {input: ref} = this.refs;


        if((prevState.valid !== this.state.valid || prevState.value !== ref.value) && parentUpdateState) {
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
    validate() {
        let {type, name} = this.props;
        let {required = false, minlength = 2} = this.props;
        name = name.replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase());
        let {value} = this.refs.input;

        switch (type) {
        case 'text':
            if(value.length < minlength && required) {
                this.setState({
                    valid: false,
                    invalidMessage: `${name.replace(/([\d])+/g, '')} is not valid`,
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

        case 'number': 
            if((value === 0 || value === '') && required) {
                this.setState({
                    valid: false,
                    invalidMessage: `${name.replace(/([\d])+/g, '')} is not valid`,
                    value
                });
            } else {
                this.setState({
                    valid: true,
                    invalidMessage: '',
                    value
                });
            }

            break;

        case 'email': {
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
        }

        case 'date': {
            let date1 = /^(\d+){4}-(\d+){2}-(\d+){2}?$/;
            let date2 = /^(\d+){2}(-|\/)(\d+){2}(-|\/)(\d+){4}?$/;

            if(!date1.test(value) && !date2.test(value)) {
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
            className,
            min = '',
            max = '',
        } = this.props;

        let dataUKDatepicker = this.props['data-uk-datepicker'] || false;
        type = (type == 'email' ? 'text' : type);
        style = {
            ...style,
            ...this.props.style
        };

        let attrs = { // input attributes
            style,
            type,
            name,
            className,
            value: this.state.value,
            min,
            max
        };

        if(dataUKDatepicker) {
            attrs['data-uk-datepicker'] = dataUKDatepicker;
        }

        return (
            <input
                {...attrs}
                onChange={() => this.setState({
                    value: this.refs.input.value
                })}
                ref="input"
                onBlur={e =>  this.validate(e)}
            />
        );
    }

    /**
     * Create invalid error message and input element
     * @return {jsx}
     */
    invalid() {
        let style = { border: "1px solid #f00" };

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
        );
    }
}
