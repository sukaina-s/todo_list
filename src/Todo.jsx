import { useState, useEffect } from "react";
import "./todo.css";

const Todo = () => {
  const [count, setCount] = useState(0);

  const func = (retries) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (retries < 2)
          resolve("done")
        reject("error")
      }, 3000)
    })
  }

  const fetchWithRetry = async (retries = 3) => {
    try {
      const data = await func(retries);
      console.log(data, 'res')
    }
    catch (err) {
      if (retries > 0) {
        console.warn(`Retrying, attempts left: ${retries}`)
        return fetchWithRetry(retries - 1)
      }
      else {
        throw new Error(`All retries failed: ${err}`)
      }
    }
  } 

  useEffect(() => {
    fetchWithRetry()
  }, [])


  return (
    <div className="container">
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Todo;
