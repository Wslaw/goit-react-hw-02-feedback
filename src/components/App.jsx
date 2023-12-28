import React from 'react';

import  FeedbackForm  from './FeedbackForm';
import styles from './feedbackForm.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        // color: '#010101'
      }}
    >
      <FeedbackForm />
    </div>
  );
};
