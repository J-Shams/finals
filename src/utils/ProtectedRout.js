import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from './getToken';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  return token ? children : null;
}

export default ProtectedRoute;