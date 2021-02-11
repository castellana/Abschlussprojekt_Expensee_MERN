import React, { useState } from 'react';

const ToggleCat = ({ children, title, total }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="kategorie-box" onClick={() => setToggle(!toggle)}>
      <div className={`kategorie-box-title ${title}`}>
        <h2>{title}</h2>
        <h2>{total}€</h2>
      </div>
      {toggle ? children : ''}
    </div>
  );
};

export default ToggleCat;
