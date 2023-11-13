import React ,{useState}from 'react';
import './Basicform.css';

const Basicform = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[allEntry,setAllEntry] = useState([]);

    const submitform = (e)=>{
        e.preventDefault();

        const newEntry = {email: email, password: password};
        setAllEntry([...allEntry,newEntry]);
    }
  return (
    <>
      <form className="Basicform" onSubmit={submitform}>
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
      <div>
        {
            allEntry.map((curElem)=>{
              return (
                <div>
                    <p>{curElem.email}</p>
                    <p>{curElem.password}</p>
                    
                </div>
              )  
            })
        }
      </div>
    </>
  );
};

export default Basicform;
