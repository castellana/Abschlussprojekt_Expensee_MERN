import Transactions from '../components/Transactions';
import HomeIntro from '../components/HomeIntro';
import StartStats from '../components/StartStats';

const HomeStart = () => {
  return (
    <section
      className="home-start"
      // style={{
      //   backgroundImage: `url(${
      //     process.env.PUBLIC_URL + '/images/bg-deco.svg'
      //   }) `,
      // }}
    >
      <StartStats />
      <div className="start-stats">
        <HomeIntro />
      </div>
      <div className="transactions">
        <Transactions />
      </div>
    </section>
  );
};

export default HomeStart;
