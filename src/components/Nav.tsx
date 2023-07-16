import { NavLink, useLocation } from 'react-router-dom';

export const Nav = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav className="flex space-x-3 text-sm mx-3">
      {location.pathname === '/' ? (
        <NavLink to="/" className="px-5 py-2 mt-2 rounded-full text-white bg-black text-sm">
          Home
        </NavLink>
      ) : (
        <NavLink to="/" className="px-5 py-2 mt-2 rounded-full text-black text-sm hover:bg-black hover:text-white">
          Home
        </NavLink>
      )}

      {location.pathname === '/apologetics' ? (
        <NavLink to="/apologetics" className="px-5 py-2 mt-2 rounded-full text-white text-sm bg-black">
          Apologetics
        </NavLink>
      ) : (
        <NavLink to="/apologetics" className="px-5 py-2 mt-2 rounded-full text-black text-sm hover:bg-black hover:text-white">
          Apologetics
        </NavLink>
      )}
      {location.pathname === '/exegesis' ? (
        <NavLink to="/exegesis" className="px-5 py-2 mt-2 rounded-full text-white text-sm bg-black">
          Exegesis
        </NavLink>
      ) : (
        <NavLink to="/exegesis" className="px-5 py-2 mt-2 rounded-full text-black text-sm hover:bg-black hover:text-white">
          Exegesis
        </NavLink>
      )}

      <NavLink to="#" className="px-5 py-2 mt-2 rounded-full text-black text-sm hover:bg-black hover:text-white">
        Music
      </NavLink>
    </nav>
  );
};
