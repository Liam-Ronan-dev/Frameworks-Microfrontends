import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';


// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory()

    if(onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history}/>, el);

    return {
        onParentNavigate({ pathname: nextPathname}) {
            const { pathname } = history.location;
            if(pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
}


// If in dev and isolation, call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root')
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
}


// Or running through container
// Should export the mount function
export { mount };