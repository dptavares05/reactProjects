import React from 'react';

// don't change the Component name "App"
export default function App() {
    
  const [clicked, setAsClicked] = React.useState('unclicked');

  function handleClick() {
    setAsClicked('clicked');
  }
    return (
        <div>
            <p   className={clicked === 'clicked' ? 'active' : ''}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
