import React from 'react';
import css from './Feedback.module.css';

export default function Section({ title, children }) {
  return (
    <div className={css.feedback}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}
