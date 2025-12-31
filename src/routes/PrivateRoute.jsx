import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'

export default function PrivateRoute({ children }) {

    const { isAuth } = useContext(AuthContext);

    return isAuth ? children : <Navigate to="/auth" />;
}

