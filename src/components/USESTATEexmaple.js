import React,{useState  /*useEffect*/} from 'react'




const USESTATEexmaple = () => {
  const myBio = [
    {
      id:0,myName:'bonu',age:18
    },
    {
      id:1,myName:'dj bonu',age:19
    },
    {
      id:2,myName:'hero bonu',age:20
    },
    {
      id:3,myName:'don bonu',age:21
    }
  ]
  const [myArray,setmyArray] = useState(myBio);
  const clearArray = () =>{
    setmyArray([]);
  }
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   document.titel =`you clicked ${count} times`;
  // });

  // const [color, setcolor] = useState("red");

  //   const [car , setCar] = useState({ 
  //     brand:"Ford",
  //     model:"Mustang",
  //     year:"1964",
  //     color:"red"
  //   });

  // const updateColor = () => {
  //   setCar(prevState => {
  //     return{ ...prevState,color:"black" }});
   
  // }

  return (
    // <div>
    //   <h1>my favorite color is {color}!</h1>
    //   <button onClick={() =>setcolor("blue")}> Blue</button>
    //   <button onClick={() =>setcolor("red")}> red</button>
    //   <button onClick={() =>setcolor("black")}> Black</button>
    //   <button onClick={() =>setcolor("white")}> white</button>
    // </div>
    // <div>
    //   <h1>My {car.brand}</h1>
    //   <p>
    //     it is a {car.color} {car.model} from {car.year}.
    //   </p>
    //   <button onClick={updateColor}>Change color</button>
    // </div>
    // <div>
    //   <p>you clicked {count} times</p>
    //   <button onClick={()=>setCount(count+1)}>Click me</button>
    // </div>
    <div>
      {
        myArray.map((curElm) =><h1 key={curElm.id}>name: {curElm.myName}& Age: {curElm.age}</h1>)
      }
      <button onClick={clearArray}></button>
    </div>
  )
}

export default USESTATEexmaple;
