import React from 'react'
import{ useState } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      // count, şu anki değeri temsil eder
      // setCount(count + 1), önceki değeri kullanarak şu anki değeri günceller
      setCount((prev) => prev + 1);
    };
    return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
}

export default Example
