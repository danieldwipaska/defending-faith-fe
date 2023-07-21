import { Link } from 'react-router-dom';

export const LearnMore = (): JSX.Element => {
  return (
    <div>
      <p className="text-lg text-slate-600 mx-4 mt-5">Others</p>
      <Link to="https://alkitab.mobi/tb/versions/" target="_blank">
        <div className="rounded-full bg-gray-700 text-white mx-4 mt-2 px-5 py-2">The Bible</div>
      </Link>

      {/* <div className="rounded-full bg-gray-700 text-white mx-4 mt-2 px-5 py-2">Find Your Church</div> */}
      {/* <div className="rounded-full bg-gray-700 text-white mx-4 mt-2 px-5 py-2">Contribute</div> */}
      <Link to="/about">
        <div className="rounded-full bg-gray-700 text-white mx-4 mt-2 px-5 py-2">About Us</div>
      </Link>

      <Link to="/account">
        <div className="rounded-full bg-gray-700 text-white mx-4 mt-2 px-5 py-2">My Account</div>
      </Link>
    </div>
  );
};
