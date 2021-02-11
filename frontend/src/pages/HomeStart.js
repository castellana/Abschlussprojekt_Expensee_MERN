import Transactions from '../components/Transactions';

//import Navbar from '../components/Nav/Navbar';
const HomeStart = () => {
  return (
    <section className="home-start">
      {/*  <Navbar  /> */}

      <div className="transactions">
        <Transactions />
      </div>
    </section>
  );
};

export default HomeStart;
