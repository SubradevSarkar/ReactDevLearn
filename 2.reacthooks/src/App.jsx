import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
      <h1>Counter Count:{count}</h1>
      <button onClick={addCount}>Add count</button>
      <button onClick={removeCount}>remove count</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;
