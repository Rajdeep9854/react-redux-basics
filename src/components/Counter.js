import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import store from '../store';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const toggle = useSelector(state => state.counter.toggle)


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHandle())
  };
  const hanldeIncremet = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }
  const hanldeIncrese = () => {
    dispatch(counterActions.increase(5))
  }
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>-- {counter} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={hanldeIncremet}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={hanldeIncrese}>+5</button>
    </main>
  );
};

export default Counter;
