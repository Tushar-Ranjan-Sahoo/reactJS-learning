import React,{useState,useEffect} from 'react'

const UseEffect2 = () => {
    const [widthCount,setWidthCount] = useState(window.screen.width);
    
    const actualWidth = () =>{
       
        setWidthCount(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);
    });
  
    return (
    <div>
        <p>the actual size of window is :</p>
        <h1> {widthCount}</h1>
    </div>
  )
}

export default UseEffect2;