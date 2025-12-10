import { useState } from "react";

function Counter(){

  const [count,setCount]=useState(0);
  

  return(
    <>
    <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    <p>{count}</p>
    <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
    </>
  )
}
export default Counter;