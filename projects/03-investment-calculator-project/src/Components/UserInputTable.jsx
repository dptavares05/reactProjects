import { useState } from 'react';

export default function UserInputTable() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      [inputIdentifier]: newValue
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investment Amount</label>
          <input type="number" required onChange= {(event) => handleInputChange('initialInvestment', event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required onChange= { (event) => handleInputChange('annualInvestment', event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required onChange= { (event) => handleInputChange('expectedReturn', event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required onChange= { (event) => handleInputChange('duration', event.target.value)} />
        </p>
      </div>
    </section>
  );
}
      