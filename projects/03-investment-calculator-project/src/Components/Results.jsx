import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {

  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return <div className="results-wrapper">
    <table id="result">
      <caption >Projected investment growth</caption>
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(yearData => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmmountInvested = yearData.valueEndOfYear - totalInterest;
          return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmmountInvested)}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>

};