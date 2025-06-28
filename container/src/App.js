import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// Lazily loading our micro frontend children apps
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));

import Loading from "./components/Loading";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

// To get access to router history
const history = createBrowserHistory()


export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Will run whenever value of isSignedIn changes
    useEffect(() => {
        if(isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn])

    return (
        // We automatically have a copy of browser history here
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={ <Loading/> }>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to='/'/>}
                                <DashboardApp />
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}