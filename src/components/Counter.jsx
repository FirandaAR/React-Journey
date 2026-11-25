import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("anonymous");
  function handleShowName() {
    const newName = "Bambangx";
    alert(`hello, my name is ${newName}`);
    setName(newName);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Name : {name}</h2>

      <button onClick={handleShowName}>Set Name</button>

      <button onClick={() => setCount((c) => c + 1)}>Increase</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
