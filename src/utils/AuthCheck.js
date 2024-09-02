import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from './getToken';

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [navigate, token]);

  return !token ? children : null;
}

export default AuthCheck;