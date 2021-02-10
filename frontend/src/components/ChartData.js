import KreisRot from './img/1.svg';
import KreisBlau from './img/2.svg';
// import KreisGelb from './img/3.svg';
// import KreisGrau from './img/4.svg';

const ChartData = ({ einnahmen, ausgaben }) => {
  return (
    <div className="chart1">
      <div className="legende">
        <div className="legende-1">
          <img src={KreisBlau} alt="Icon" />
          <h3>Einkommen: {einnahmen}€</h3>
        </div>
        <div className="legende-1">
          <img src={KreisRot} alt="Icon" />
          <h3>Ausgaben: -{ausgaben}€</h3>
        </div>
        {/* <div className="legende-1">
          <img src={KreisGelb} alt="Icon" />
          <h3>Sparen</h3>
        </div> */}
        {/* <div className="legende-1">
          <img src={KreisGrau} alt="Icon" />
          <h3>Sonstiges</h3>
        </div> */}
      </div>
    </div>
  );
};

export default ChartData;
