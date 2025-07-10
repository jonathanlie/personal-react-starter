import React, { useState } from 'react';
import Button from '@components/Button'; // Reusing our stateless button

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Counter Component (useState)</h2>
      <p className="text-4xl font-extrabold mb-6 text-blue-600">{count}</p>
      <div className="space-x-4">
        <Button label="Increment" onClick={increment} />
        <Button label="Decrement" onClick={decrement} className="bg-red-500 hover:bg-red-600" />
        <Button label="Reset" onClick={reset} className="bg-gray-500 hover:bg-gray-600" />
      </div>
    </div>
  );
};

export default Counter;
