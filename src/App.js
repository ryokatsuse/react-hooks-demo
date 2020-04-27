import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const resetCount = () => setCount(0)
  const multipleCount = () => setCount(previousCount => previousCount * 2)
  const threeCount = () => setCount(previousCount => {
    if(previousCount % 3 === 0){
      return previousCount / 3
    } else {
      return previousCount
    }
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={increment2}>+</button>
        <button onClick={decrement2}>-</button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
        <button onClick={multipleCount}>x2</button>
        <button onClick={threeCount}>3の倍数のときだけ押すと割る</button>
      </div>
    </>
  );
}

export default App;
