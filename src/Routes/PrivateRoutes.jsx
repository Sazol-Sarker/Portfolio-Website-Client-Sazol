import React, { useContext } from 'react';
import AuthContext from '../Providers/AuthProvider/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
if(loading)
{
    return <div>Loading....</div>
}

    if(user)
    {
        return children
    }
    return (
        <Navigate to="/"></Navigate>
    );
};

export default PrivateRoutes;