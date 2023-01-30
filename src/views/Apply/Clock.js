import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className='time-cont'>
      <div className='time'>
        <h2 className=' nums clock-days'>{leading0(days)}</h2><h3> Days</h3>
      </div>
      <div className='time'>
        <h2 className=' nums clock-hours'>{leading0(hours)}</h2><h3> Hours</h3>
      </div>
      <div className='time'>
        <h2 className=' nums clock-minutes'>{leading0(minutes)}</h2><h3> Minutes</h3>
      </div>
      <div className='time'>
        <h2 className=' nums clock-seconds'>{leading0(seconds)}</h2><h3> Seconds</h3>
      </div>
    </div>
  );
};

export default Clock;
