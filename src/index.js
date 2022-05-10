import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate, useSearchParams } from 'react-router-dom';
import { App } from 'components/App';

import { addSeconds, differenceInMilliseconds } from 'date-fns';

const TIMER_DELAY = 1000;

const NotFound = () => {
  const [remainingTime, setRemainingTime] = useState();
  // let navigate = useNavigate();
  // const targetDate = useRef(addSeconds(new Date(), 5));

  useEffect(() => {
    const targetDate = addSeconds(new Date(), 5);
    const intervalId = setInterval(() => {
      const now = new Date();
      const delta = differenceInMilliseconds(targetDate, now);
      console.log(delta);
      // if (delta >= 5) {
      //   clearInterval(intervalId);
      // }
    }, TIMER_DELAY);
  }, []);

  // const ref = useRef(
  //   setInterval(() => {
  //     setTime(t => t - 1);
  //     time <= 0 && setTime(0);
  //   }, 1000)
  // );

  // useEffect(() => {
  //   if (time <= 0) {
  //     clearInterval(ref.current);
  //     navigate('/main');
  //   }
  // }, [navigate, time]);

  return (
    <div>
      <p>
        {/* <BiError /> Page not found, */}
        {/* <Link to="/main" style={{ textDecoration: 'none' }}>
          {' '}
          go to homepage
        </Link> */}
        {/* <BiError /> */}
      </p>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        {/* <BiTimeFive /> */}
        {/* {`Redirecting in ${time >= 0 && time} seconds`} */}
        {/* <BiTimeFive /> */}
      </p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-41/">
      <NotFound />
    </BrowserRouter>
  </React.StrictMode>
);
