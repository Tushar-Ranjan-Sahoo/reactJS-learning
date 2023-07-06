import React from 'react';
import './Basicform.css';

const Basicform = () => {
  return (
    <>
      <form className="Basicform">
      <div>
          <label className="email">email</label>
          <input className="email-input" type="email" />
        </div>
        <div>
          <label>password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Basicform;
