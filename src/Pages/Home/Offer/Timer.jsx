import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const formattedTime = milliseconds => {
    let total_second = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let total_days = parseInt(Math.floor(total_hours / 24));

    let second = parseInt(total_second % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${total_days} : ${hours} : ${minutes} : ${second}`;
  };

  return <div className="text-4xl mt-4 lg:mt-16">{formattedTime(time)}</div>;
};

export default Timer;

Timer.propTypes = {
  duration: PropTypes.number,
};
