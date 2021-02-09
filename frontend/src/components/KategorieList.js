const KategorieList = () => {
  const value = '2032€';

  return (
    <div className="kategorie-wrapper">
      <h2>
        Ausgaben <span>Ausgaben</span>
      </h2>
      <div className="kategorie">
        <h4>Einnahmen</h4>
        <h2>{value}</h2>
        <div className="sub-item">
          <h2>Lohn</h2>
          <h2>Nebenjob</h2>
        </div>
      </div>
      <div className="kategorie">
        <h4>Ausgaben</h4>
        <div className="sub-item">
          <h2>Lebensmittel</h2>
          <h2>Shopping</h2>
          <h2>Wohnen</h2>
          <h2>Mobilität</h2>
          <h2>Freizeit</h2>
        </div>
      </div>
      <div className="kategorie">
        <h4>Fixkosten</h4>
        <div className="sub-item">
          <h2>Wohnen</h2>
          <h2>Strom</h2>
          <h2>Heizungkosten</h2>
          <h2>Abos</h2>
          <h2>Netflix</h2>
        </div>
      </div>
      <div className="kategorie">
        <h4>Guthaben</h4>
        <div className="sub-item">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default KategorieList;
