const KategorieItem2 = ({ category, sum }) => {
  return (
    <div className="kategorieItem-wrapper dunkelblau">
      <h2>{category}</h2>
      <h2>{sum}€</h2>
    </div>
  );
};

export default KategorieItem2;
