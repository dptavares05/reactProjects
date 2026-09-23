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
      <Results input={userInput} />
    </>
  )
}

export default App
