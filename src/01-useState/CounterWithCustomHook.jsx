import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter(20);
  const jumpValue = 3;
  // const onHandleIncrement = () => {
  //   increment();
  // }

  // const onHandleDecrement = () => {
  //   decrement();
  // }

  // const onHandleReset = () => {
  //   reset();
  // }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={ () => increment(jumpValue) }>+{jumpValue}</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ () => decrement(jumpValue) }>-{jumpValue}</button>

    </>
  )
}
