import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.js';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackOptions />
    </div>
  );
};
