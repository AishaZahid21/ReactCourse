import React , {useState} from "react";
import ReactDom from "react-dom";
import "./index.css";

function Room(){
  const [isLit , setLit] = useState(true);
  const brightness = isLit ? 'lit': 'dark'
return <div class={`room ${brightness}`}>This room is {isLit ? 'lit' : 'dark'}
<br/>
<button onClick={()=>setLit(!isLit)}> Flip </button>

</div>
}

ReactDom.render(<Room/>, document.getElementById("root"));