import React, { useState } from 'react';

const ToggleCat = ({ children, title, total, index }) => {
  const [toggle, setToggle] = useState(false);
  console.log(index + 'index');
  return (
    <div
      key={index}
      className="kategorie-box"
      onClick={() => setToggle(!toggle)}
    >
      <div className={`kategorie-box-title ${title}`}>
        <h2>{title}</h2>
        <h2>{title === 'Einnahme' ? total : `-${total}`}€</h2>
      </div>
      {toggle ? children : ''}
    </div>
  );
};

export default ToggleCat;
