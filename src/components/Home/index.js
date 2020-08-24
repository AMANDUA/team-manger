import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalHeader from '../GlobalHeader'
import TeamList from '../TeamsListContainer'
import TeamDetails from '../TeamDetailContainer'

const HomePage = () => {
    return (
        <>
            <GlobalHeader />
            <div className="app-body">
                <TeamList />
                <Switch>
                    <Route component={TeamDetails} exact path="/teams/:teamId" />
                </Switch>
            </div>
        </>
    );
}

export default HomePage;