import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoSmall from '../images/defending-faith-logo-small.png';

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
          <p className="text-4xl font-semibold font-serif my-3 mx-3 tracking-wide">
            Hello, <span className="text-amber-400">{localStorage.getItem('username')}</span>
          </p>
        </div>

        <div className="col-span-3 justify-self-end self-center">
          <button className="inline text-sm bg-gray-700 text-slate-100 rounded-full px-3 py-2" onClick={logout}>
            Logout
          </button>
          <img src={logoSmall} className="rounded-full w-12 my-3 mx-3 inline" alt="profile" />
        </div>
      </div>
    </div>
  );
};
