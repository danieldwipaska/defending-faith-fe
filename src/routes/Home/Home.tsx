import { LearnMore } from '../../components/LearnMore';
import { Greeter } from '../../components/Greeter';
import { Nav } from '../../components/Nav';
import { NewRelease } from './NewRelease';

import { useAuth } from '../../context/AuthContext';
import { CheckToken } from '../../funtions/CheckToken';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = (): JSX.Element => {
  const { user } = useAuth();
  CheckToken(user);

  return (
    <div>
      <Greeter />
      <Nav />
      <NewRelease />
      <LearnMore />
    </div>
  );
};
