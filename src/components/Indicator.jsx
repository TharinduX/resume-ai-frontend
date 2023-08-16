import React from 'react';
import '../styles.css';

const Indicator = ({ value }) => {
  const val = (value / 100) * 100;
  const deg = (180 / 100) * val;

  let color;

  if (val >= 70) {
    color = '#3e9e0e';
  } else if (val >= 50) {
    color = '#f2d33a';
  } else if (val >= 20) {
    color = '#ff9113';
  } else {
    color = '#ed5731';
  }

  const barStyle = {
    transform: `rotate(${deg}deg)`,
    borderColor: color,
  };

  return (
    <div className='mb-10'>
      <div className='indicator text-red-500'>
        <span className='bar' style={barStyle} />
        <span className='result' style={{ color: color }}>
          <span>{value}</span>/<span>100</span>
        </span>
      </div>
      <p className='text-center text-x'>Resume Score</p>
    </div>
  );
};

export default Indicator;
