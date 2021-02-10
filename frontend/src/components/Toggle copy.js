import React, { useState } from 'react';

const Toggle = ({ children, title, howmuch, farbe }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="kategorie-box" onClick={() => setToggle(!toggle)}>
      <div className={`kategorie-box-title ${farbe}`}>
        <h2>{title}</h2>
        <h2>{howmuch}</h2>
      </div>
      {toggle ? children : ''}
    </div>
  );
};

export default Toggle;
