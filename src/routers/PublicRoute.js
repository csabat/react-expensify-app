import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from "../components/Header";
import LoginPage from '../components/LoginPage';

export const PublicRoute = ({
    isAuthenticated, 
    component: Component,
    ...rest 
}) => (
    <Route {...rest} component={() => (
        isAuthenticated ? (
           
           <Redirect to="/dashboard" />
        ) : (
            <Component {...rest} /> 
        )
)}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)