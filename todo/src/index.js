import React from 'react';
import ReactDOM from 'react-dom';

const el = <h1>Hello world</h1>
console.log(el);
// const el = React.createElement(
//     'h1', null, 'Hello World!!!');

ReactDOM.render(el,
    document.getElementById('root')
);