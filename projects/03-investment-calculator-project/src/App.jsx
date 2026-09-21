import Header from "./Components/Header";
import logo from "./assets/investment-calculator-logo.png";
import UserInputTable from "./Components/UserInputTable";

function App() {
  return (
    <>
      <Header text="Investment Calculator" img={logo} />
      <UserInputTable />
    </>
  )
}

export default App
