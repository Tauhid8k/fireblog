import React from 'react';

export const Loader = ({ center }) => {
  return <div className={`loader ${center ? 'mx-auto' : ''}`}></div>;
};
