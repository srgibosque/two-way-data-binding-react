import { useState } from 'react';

function Results({input}) {
  

  const [userInput, setUserInput] = useState({
  
  });

 

  return (
    <>
    <h2>Results</h2>
    <div>
    <p>{input.initialInvestment}</p>
    <p>{input.annualInvestment}</p>
    <p>{input.expectedReturn}</p>
    <p>{input.duration}</p>
    </div>
    </>
  )
}

export default Results;
