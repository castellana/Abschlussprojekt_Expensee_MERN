import Transactions from '../components/Transactions';
import HomeIntro from '../components/HomeIntro';
//import Navbar from '../components/Nav/Navbar';
const HomeStart = () => {
  return (
    <section className="home-start">
    {/*  <Navbar  /> */}
      <HomeIntro />
      
      <div className="transactions">
        <Transactions />
     
      </div>
    </section>
  );
};

export default HomeStart;
