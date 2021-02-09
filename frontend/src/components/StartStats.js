// import ChartBalken from '../components/ChartBalken';

const StartStats = () => {
  return (
    <>
      <div className="start-stats-wrapper">
        <div className="globale-summe">
          <h1>+2.071,49€</h1>
        </div>
        <div className="stats-box">
          <div className="stats-Guthaben">
            <h3>Guthaben</h3>
            <h2>+4.895,23€</h2>
          </div>
          <div className="stats-vert"></div>
          <div className="stats-Ausgaben">
            <h3>Ausgaben</h3>
            <h2>-2,823,74€</h2>
          </div>
        </div>
        <hr className="start-line" />
        {/* <ChartBalken /> */}
      </div>
    </>
  );
};

export default StartStats;
