import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-20">Counter</h1>
      <div className="w-[70%] flex justify-between">
        <button
          className="rounded bg-red-300 text-xl w-[5%] h-10"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          className="rounded bg-red-300 text-xl w-[5%] h-10"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <button
          className="rounded bg-red-300 text-xl w-[10%] h-10"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <span className="mt-10 text-2xl font-bold ">Count is {count}</span>
    </div>
  );
}

export default App;
