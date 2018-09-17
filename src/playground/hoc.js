//Higher order component - a component renders another component
//reuse code
//render hijacking
//prop manipulation
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = ( WrappedComponent ) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent/>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} />, document.getElementById('app'));