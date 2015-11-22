import React from 'react';
import ReactDom from 'react-dom';

const style = {color: '#00f'};

ReactDom.render(
    /* jshint ignore: start */
    <div>
        <h1>Test text</h1>
        <div style={style}>
            Test blue text again
        </div>
    </div>,
    document.getElementById('test')
    /* jshint ignore: end */
);
