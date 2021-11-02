import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { HomeScreen } from '../views/Home/homeScreen';
import { AuthRouter } from './authRouter';

export const AppRouter = () => {

    // const {user} = useContext(AuthContext)

    return (
        
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route
                        exact
                        path="/"
                        component={HomeScreen}
                    />
                            


                    <Redirect to="/auth/login"/>



                </Switch>
            </div>
        </Router>
    )
}
