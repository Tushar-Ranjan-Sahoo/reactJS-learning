import react, {useState} from 'react';
import './App.css';
import USESTATEexmaple from './components/USESTATEexmaple';

function App() {
  const [myCar,setmyCar] = useState("volvo");
  const handleChange = (event) =>{
    setmyCar(event.target.value);
  }
  return (
   <>
   <USESTATEexmaple/>

      
      
  
   </>
  );
}

export default App;
