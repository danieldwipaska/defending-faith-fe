import { useQuery } from '@tanstack/react-query';
import { Greeter } from '../../components/Greeter';
import { useAuth } from '../../context/AuthContext';
import { CheckToken } from '../../funtions/CheckToken';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Article/Header';

export const MyAccount = (): JSX.Element => {
  const { user } = useAuth();
  CheckToken(user);

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  useQuery(['user'], () => {
    return axios
      .get(`http://localhost:8800/api/users/account`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      })
      .then((res) => {
        setUsername(res.data.username);
        setUserId(res.data.userId);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleSubmit = () => {
    const verify = window.confirm('Your account would be deleted permanently. Are you sure?');

    if (!verify) return;

    axios
      .delete(
        `http://localhost:8800/api/users/${userId}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        }
      )
      .then((res) => {
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  return (
    <div>
      <Header from={'Account'} />
      <div className="mx-10 my-5">
        <div className="grid grid-cols-4 gap-2">
          <div>
            <p className="text-base">User ID</p>
          </div>
          <div className="col-span-3">
            <p className="text-base italic">: {userId}</p>
          </div>
          <div>
            <p className="text-base">Username</p>
          </div>
          <div className="col-span-3">
            <p className="text-base">: {username}</p>
          </div>
        </div>
        <button className="my-7 px-4 py-3 bg-rose-500 text-white rounded-full" onClick={handleSubmit}>
          Delete Account
        </button>
      </div>
    </div>
  );
};
