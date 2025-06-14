import React from "react";
import ReactDOM from 'react-dom';
// Mount function to start the app
const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    )
}


// If in dev and isolation, call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot);
    }
}


// Or running through container
// Should export the mount function
export { mount };