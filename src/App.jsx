import './App.css'
import Table from './components/table/Table';
import Header from './components/header/Header';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {
  // State to hold the user input
  const [userInput, setUserInput] = useState(null);
  // Calculate button handler function to calculate the yearly data and update the state
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }
  // Array to hold the per-year results
  const yearlyData = [];
  // If user input exists, calculate the yearly data and update the state
  if (userInput) {
    // Initial savings and contribution amount from user input
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    // Calculate yearly results (total savings, interest etc) from user input and update the state with the result
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <>
      <Header />
      <Form calculate={calculateHandler} />
      {!userInput && <p>no Investment calculated yet.</p>}
      {userInput && <Table passedData = {yearlyData} userInvesting = {userInput["current-savings"]} />}
    </>
  );
}

export default App;
