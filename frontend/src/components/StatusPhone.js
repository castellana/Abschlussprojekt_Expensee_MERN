import Clock from './Clock';
import StatusIcons from './img/status.svg';

const Status = () => {
  return (
    <div className="status-phone">
      <div className="status-icons">
        <img src={StatusIcons} alt="status icon" />
      </div>
      <Clock />
    </div>
  );
};

export default Status;
