import { useClicks } from 'redux/clicksSlice';

export const App = () => {
  const { numberOfClicks, increment, reset } = useClicks();

  return (
    <>
      <button onClick={() => increment(5)}>{numberOfClicks}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
