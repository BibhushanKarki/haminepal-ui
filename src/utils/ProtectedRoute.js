import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, condition, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                return condition ?
                    <Component {...rest} {...props} /> :
                    <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
            }
        } />
    )
}

export default ProtectedRoute;