import React from 'react';

const InputGroup = ({
    className,
    children
}) => (
    /* jshint ignore: start */
    <div className={className}>
        {children.map((input, index) => {
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

export default InputGroup;
