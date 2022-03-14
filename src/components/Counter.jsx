import React from "react";

const Counter = (props) => {
  const [count, setCount] = React.useState(props.value);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const double = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <h1>
        Counter <span>{count}</span>
      </h1>
      <button className="btn" onClick={increase}>
        +
      </button>
      <button className="btn" onClick={decrease}>
        -
      </button>
      <button className="btn" onClick={double}>
        Double
      </button>
    </div>
  );
};
export default Counter;
