import React , {useState} from "react";
import ReactDom from "react-dom";
import "./index.css";

function Room(){
  const [isLit , setLit] = useState(true);
  const [tempValue]=useState({day:72,night:22})
  const brightness = isLit ? 'lit': 'dark'
return <div className={`room ${brightness}`}>
  This room is {isLit ? 'lit' : 'dark'}
<br/>
Room temperature is {isLit ? tempValue.day : tempValue.night}
<br/>
<button onClick={()=>{
  if(!isLit){
    setLit(!isLit)
  }
}}> ON </button>
<button onClick={()=>{
  if(isLit){
    setLit(!isLit)
  }
}}> OFF </button>


</div>
}

ReactDom.render(<Room/>, document.getElementById("root"));