import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Dashboard from './../components/home/Dashboard';
import CreateRecord from './../components/home/CreateRecord';
import NotFoundPage from './../components/NotFoundPage';
import {Footer, Header} from './../components/layouts/index';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/create" component={CreateRecord}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;
