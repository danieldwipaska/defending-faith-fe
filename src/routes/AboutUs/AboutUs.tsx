import { Copyright } from '../../components/Copyright';
import { Header } from '../Article/Header';
import { Explanation } from './Explanation';
import { Jumbotron } from './Jumbotron';

export const AboutUs = (): JSX.Element => {
  return (
    <div>
      <Header from={'About Us'} />
      <Jumbotron />
      <Explanation />
      <br />
      <br />
      <Copyright />
    </div>
  );
};
