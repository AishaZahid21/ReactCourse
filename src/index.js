import React from "react";
import ReactDom from "react-dom";
import './index.css';

function Hi(prop){
  return <div class="main">
    <h1 class="header">Hello {prop.name}</h1>
    <br/>
    <p class="ptag"><strong>Today's Tasks</strong></p>
    <ol class="list">
      <li>React practice</li>
      <li>React practice</li>
      <li>React practice</li>
      <li>React practice</li>
      <li>React practice</li>
    </ol>
<p>Just simple JavaScript 3 + 5 = {3+5}</p>
  </div>;
}

ReactDom.render(<Hi name="Ayesha"/>,document.querySelector("#root"));