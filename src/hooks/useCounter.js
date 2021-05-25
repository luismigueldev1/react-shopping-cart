import { useState } from "react";

export function useCounter(initialCounter = 10) {
  const [counter, setCounter] = useState(initialCounter);

  const decrement = (factor = 1) => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - factor);
  };

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const reset = () => {
    setCounter(initialCounter);
  };

  return [counter, increment, decrement, reset];
}
