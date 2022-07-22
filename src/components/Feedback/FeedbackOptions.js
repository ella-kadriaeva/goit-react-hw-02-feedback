import React from 'react';

import css from './Feedback.module.css';

export default function FeedbackOptions({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) {
  return (
    <div className={css.btnBlock}>
      <button onClick={goodFeedback} className={css.btn} type="button">
        Good
      </button>
      <button onClick={neutralFeedback} className={css.btn} type="button">
        Neutral
      </button>
      <button onClick={badFeedback} className={css.btn} type="button">
        Bad
      </button>
    </div>
  );
}
