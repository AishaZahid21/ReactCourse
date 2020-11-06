import React , {useState} from "react"
import ReactDom from "react-dom"


function Room(){
  const [isLit , setLit] = useState(true);
return <div class="room">This room is {isLit ? 'lit' : 'dark'}
<br/>
<button onClick={()=>setLit(!isLit)}> Flip</button>

</div>
}

ReactDom.render(<Room/>, document.getElementById("root"));