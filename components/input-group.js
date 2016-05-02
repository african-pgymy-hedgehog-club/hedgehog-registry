import React from 'react';

const InputGroup = ({
    className,
    children,
    onClick = () => {},
    style = {}
}) => {
    children = (Array.isArray(children) ? children : [children])

    return (
        /* jshint ignore: start */
        <div id="input-group" className={className} onClick={onClick} style={style}>
            {children.map((input, index) => {
                if(typeof(input) === 'string') {
                    input = <span>{input}</span>;
                }

                let float = input.props.float || 'left';
                let className = `uk-float-${float}`;

                return (
                <div className={className} key={index}>
                    {input}
                </div>
                );
            })}
        </div>
        /* jshint ignore: end */
    );
}

export default InputGroup;
