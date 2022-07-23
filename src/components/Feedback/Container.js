import React from 'react';
import css from './Feedback.module.css';

export default function Conainer({ children }) {
  return <div className={css.container}>{children}</div>;
}
