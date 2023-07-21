import logo from '../../images/defending-faith-logo.png';

export const Jumbotron = (): JSX.Element => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <img src={logo} alt="logo" className="w-44 rounded-full shadow-md" />
      </div>
      <div className="mt-5">
        <p className="text-center text-xl">Tentang Kami</p>
      </div>
    </div>
  );
};
