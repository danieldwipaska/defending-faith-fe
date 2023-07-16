import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Copyright = () => {
  return (
    <div className="container-copyright border-t-2 border-slate-400 mt-3">
      <p className="text-xs text-slate-700 text-center my-2">
        <FontAwesomeIcon icon={faCopyright} style={{ color: '#010100' }} />
        <span className="ml-2">Copyright - danielkamasi | All rights reserved.</span>
      </p>
    </div>
  );
};
