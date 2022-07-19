import React from 'react';
import style from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({text}) => (<h1 className={style}>{text}</h1>);

Title.propTypes = {
  text: PropTypes.string,
};
