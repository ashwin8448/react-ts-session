import React, { useState, useCallback } from "react";

// A child component that receives the onClick handler as a prop
const ChildButton = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("ChildButton re-rendered");
  return <button onClick={onClick}>Click me (child btn)</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  console.log(count);

  // Memoized callback with useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <br />
      {/* Render the child button with memoized callback */}
      <ChildButton onClick={handleClick} />
      <br />
      <button onClick={() => setOtherState(otherState + 1)}>
        Increment Other State
      </button>
      <p>Other State: {otherState}</p>
    </div>
  );
};

export default App;
