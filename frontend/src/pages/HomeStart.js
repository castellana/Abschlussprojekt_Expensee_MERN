import Transactions from '../components/Transactions';
import HomeIntro from '../components/HomeIntro';
const HomeStart = () => {
  return (
    <section className="home-start">
      
      <HomeIntro />
      <div className="transactions">
        <Transactions />
     
      </div>
    </section>
  );
};

export default HomeStart;
