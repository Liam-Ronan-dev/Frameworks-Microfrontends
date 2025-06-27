import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// Lazily loading our micro frontend children apps
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

import Loading from "./components/Loading";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        // We automatically have a copy of browser history here
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={ <Loading/> }>
                        <Switch>
                            <Route path="/auth" component={AuthApp} />
                            <Route path="/" component={MarketingApp}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}