import React, { useState, useMemo } from "react";

const ExpensiveComputation = ({ num }: { num: number }) => {
  // Simulating an expensive calculation with a loop
  const expensiveResult = useMemo(() => {
    console.log("Computing expensive result...");
    const result = 5 * num;
    return result;
  }, [num]); //5

  return <div>Expensive Result: {expensiveResult}</div>;
};

const App = () => {
  const [num, setNum] = useState(1); //1 2
  const [otherState, setOtherState] = useState(0);
  return (
    <div>
      <h1>Expensive Computation Example</h1>
      <ExpensiveComputation num={num} />
      <button onClick={() => setNum(num + 1)}>Increment Number</button>
      <br />
      <button onClick={() => setOtherState(otherState + 1)}>
        Increment Other State
      </button>
      <p>Other State: {otherState}</p>
    </div>
  );
};

export default App;
