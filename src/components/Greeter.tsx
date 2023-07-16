import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Greeter = (): JSX.Element => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    signOut();
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-5 self-center">
          <p className="text-4xl font-semibold font-serif my-3 mx-3 tracking-wide">Hello, {localStorage.getItem('username')}</p>
        </div>

        <div className="col-span-3 justify-self-end self-center">
          <button className="inline text-sm bg-gray-300 text-slate-600 rounded-full px-3 py-2" onClick={logout}>
            Logout
          </button>
          <img src={'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'} className="rounded-full w-10 my-3 mx-3 inline" alt="profile" />
        </div>
      </div>
    </div>
  );
};
