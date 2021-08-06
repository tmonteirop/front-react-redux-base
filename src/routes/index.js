import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} isPrivate/>
        </Switch>
    );
}