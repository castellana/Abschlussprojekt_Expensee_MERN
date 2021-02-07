import homeBtn from './img/home-button.svg';
import chartsBtn from './img/icon-charts.svg';
import incomeBtn from './img/icon-einkommen.svg';

const BottomNavigation = () => {
  return (
    <footer
      className="bottom-nav"
      //   style={{
      //     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/boo1.svg'}) `,
      //     backgroundRepeat: 'no-repeat',
      //     backgroundPosition: '50% 50%',
      //   }}
    >
      <div className="einkommen-btn">
        <img src={incomeBtn} alt="home" />
        <h3>Edit</h3>
      </div>
      <div className="home-btn">
        <img src={homeBtn} alt="home" />
        <h3>Home</h3>
      </div>
      <div className="charts-button">
        <img src={chartsBtn} alt="home" />
        <h3>Charts</h3>
      </div>
    </footer>
  );
};

export default BottomNavigation;
