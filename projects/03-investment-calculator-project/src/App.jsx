import Header from "./Components/Header";
import logo from "./assets/investment-calculator-logo.png";
import UserInputTable from "./Components/UserInputTable";
import Results from "./Components/Results";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid =
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn >= 0 &&
    userInput.duration >= 1;


  function handleInputChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue
    }));
  }
  return (
    <>
      <Header text="Investment Calculator" img={logo} />
      <UserInputTable userInput={userInput} onChange={handleInputChange} />
      {!inputIsValid && <p className="center">Invalid input. Please enter a duration value greater than 0.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
