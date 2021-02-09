const KategorieBox = ({ kategorie, farbe, value }) => {
  console.log(farbe);
  return (
    <div className={`kategorie-box ${farbe}`}>
      <h2>{kategorie}:</h2>
      <h2>{value}</h2>
    </div>
  );
};

export default KategorieBox;
