import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results


  // default useState is null which means false,
  // therefore we use if statement, if condition is true
  // below calc will get executed
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  
  }
    // do something with yearlyData ...
    // console.log(yearlyData[0]);

  return (
    <div>
      <Header />

      <Form userInputCalculator={calculateHandler} />

  {!userInput && <center>please input data for calculation</center>}
  {userInput && <Table calculatedData={yearlyData} initialInvestment={userInput["current-savings"]}/>}

      
    </div>
  );
}

export default App;
