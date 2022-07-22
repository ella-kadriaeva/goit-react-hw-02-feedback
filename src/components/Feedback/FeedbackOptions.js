import React from 'react';
import PropTypes from 'prop-types';
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
FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
  neutralFeedback: PropTypes.number.isRequired,
  badFeedback: PropTypes.number.isRequired,
};
