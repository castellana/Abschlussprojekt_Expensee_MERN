const KategorieItem = ({ what, howmuch, farbe }) => {
  return (
    <div className={`kategorieItem-wrapper ${farbe}`}>
      <h2>{what}</h2>
      <h2>{howmuch}</h2>
    </div>
  );
};

export default KategorieItem;
