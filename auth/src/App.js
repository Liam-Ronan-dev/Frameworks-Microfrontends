import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";


// When build our app for prod, this will generate a prefix of 'au'
const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

console.log("object");

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch></Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}