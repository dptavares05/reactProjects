import React from 'react';

function handleClick(button){
    if (button === "Yes"){setColor("green")};
    if (button === "No"){setColor("red")};
}

function App() {
    
    function handleClick(button){
    if (button === "Yes"){setColor("green")};
    if (button === "No"){setColor("red")};
    }
    
    const[color,setColor] = React.useState("white");
    
    return (
    <div id="app">
      <h1 style = {{color: color}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick = {() => handleClick("Yes")}>Yes</button>
        </li>
        <li>
          <button onClick = {() => handleClick("No")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
