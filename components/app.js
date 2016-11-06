"use strict";

const React = require('react');
const TestCom = require('./test-comp');
// lll

const App = (props) => (
    /* jshint ignore: start */
    <div>
        <h1>Test text</h1>
        <TestCom />
    </div>
    /* jshint ignore: end */
);

module.exports = App;
