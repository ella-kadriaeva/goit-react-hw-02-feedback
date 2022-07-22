import React from 'react';
import css from './Feedback.module.css';

export default function Statistics({ onGood, onNeutral, onBad, total }) {
  return (
    <ul className={css.statisticsBlock}>
      <li className={css.item}>Good: {onGood}</li>
      <li className={css.item}>Neutral: {onNeutral}</li>
      <li className={css.item}>Bad: {onBad}</li>
      <li className={css.item}>Total: {total}</li>
      {/* <li className={css.item}>Positive feedback: {this.state.bad}%</li> */}
    </ul>
  );
}
