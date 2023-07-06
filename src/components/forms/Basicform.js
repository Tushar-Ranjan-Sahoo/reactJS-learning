import React ,{useState}from 'react';
import './Basicform.css';

const Basicform = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
  return (
    <>
      <form className="Basicform">
      <div>
          <label className="email">email</label>
          <input className="email-input" type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Basicform;
