import React from 'react';
import styles from './feedbackForm.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.action}>
      {options.map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          key={option}
          type="button"
          className={styles.btn}
        >
          {/* {getOptionIcon(option)} */}
          {option}
        </button>
      ))}
    </div>
  );
};

const getOptionIcon = option => {
  switch (option) {
    case 'good':
      return '👍'; 
    case 'neutral':
      return '😐'; 
    case 'bad':
      return '👎'; 
    default:
      return option; 
  }
};

export default FeedbackOptions;
