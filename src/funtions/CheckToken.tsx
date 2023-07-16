import { useNavigate } from 'react-router-dom';
import { IUser } from '../context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';

export const CheckToken = (user: IUser) => {
  const navigate = useNavigate();

  return useEffect(() => {
    if (!user.username) return navigate('/login');

    axios
      .get('http://localhost:8800/api/auth/verify', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      })
      .then((res) => {
        return;
      })
      .catch((err) => {
        return navigate('/login');
      });
  });
};
