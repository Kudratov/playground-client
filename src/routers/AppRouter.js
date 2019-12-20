import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Dashboard from './../components/home/Dashboard';
import NotFoundPage from './../components/NotFoundPage';
import {Footer, Header} from './../components/layouts/index';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;
