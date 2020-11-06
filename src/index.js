import React , {useState} from "react"
import ReactDom from "react-dom"


function Room(){
  const [isLit , setLit] = useState(false);
return <div>This room is {isLit ? 'lit' : 'dark'}</div>
}

ReactDom.render(<Room/>, document.getElementById("root"));