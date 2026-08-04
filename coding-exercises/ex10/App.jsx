// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    
    const [warning,setAlertState] = React.useState(false);
    
    function showAlert(){
        setAlertState(true);
        
    }
    
    function hideAlert(){
        setAlertState(false);
    }

    return (
      <div>
        { warning && (
            <div data-testid="alert" id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={hideAlert}>Proceed</button>
            </div>
          ) }
        
          <div>
            <button onClick={showAlert}>Delete</button>
          </div>
      </div>
    );
}