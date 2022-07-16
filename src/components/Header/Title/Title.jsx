import React from 'react';
import style from './Title.module.css';

export const Title = ({ text }) => {
  return <h1 className={style}>{text}</h1>;
};
