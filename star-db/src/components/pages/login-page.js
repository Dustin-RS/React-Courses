import React from 'react'
import { Redirect } from 'react-router';
const LoginPage = ({ isLoggedIn, onLogin }) => {
    if( isLoggedIn){
        return <Redirect to="/"/>;
    }
    return (
        <div>
            <p>Login to see secret page!</p>
            <button
                className="btn btn-primary"
                onClick={onLogin}
                Login>
                Login
            </button>
        </div>
    );
};

export default LoginPage;