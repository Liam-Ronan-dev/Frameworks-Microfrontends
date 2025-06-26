import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { createMemoryHistory } from 'history';


// Mount function to start the app
const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory()

    history.listen(onNavigate);

    ReactDOM.render(<App history={history}/>, el)
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