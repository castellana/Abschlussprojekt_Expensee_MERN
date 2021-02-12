// import homeBtn from './img/home-button.svg';
// import homeBtn from './img/home.svg';
// import chartsBtn from './img/charts.svg';
// import cross from './img/cross.svg';

import HomeBtn from './HomeBtn';
import ChartsBtn from './ChartsBtn';
import Cross from './Cross';

import { NavLink } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <footer

    //   style={{
    //     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/boo1.svg'}) `,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: '50% 50%',
    //   }}
    >
      <div className="app-bar-bottom">
        <NavLink to="/HomeStart">
          <div className="home-btn iconhover">
            <HomeBtn />
            <h3>Home</h3>
          </div>
        </NavLink>
        <NavLink to="/add">
          <div className="btn">
            <div className="btn-content">
              <Cross />
            </div>
          </div>
        </NavLink>
        <NavLink to="/charts">
          <div className="charts-btn iconhover">
            <ChartsBtn />
            <h3>Charts</h3>
          </div>
        </NavLink>
      </div>
    </footer>
  );
};

export default BottomNavigation;
