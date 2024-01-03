// import { Component } from 'react';
import React, {Component} from 'react';
import './feedbackForm.module.css';
import styles from './feedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleFeedback = type => {
    this.setState(prevState => ({
     [type]: prevState[type] + 1
    }));
  };


  render() {
    
    const feedbackTypes = Object.keys(this.state);

    return (
      <div>
        <h2 className={styles.title}>Please leave feedback</h2>

        {feedbackTypes.map(type => (
          <button
            key={type}
            className={styles.btn}
            type="button"
            onClick={() => this.handleFeedback(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}

        <h2 className={styles.title}>Statistics</h2>

        {feedbackTypes.map(type => (
          <p key={type} className={styles.text}>
            {type.charAt(0).toUpperCase() + type.slice(1)}:{' '}
            <span>{this.state[type]}</span>
          </p>
        ))}
      </div>
    );
  }
}

export default FeedbackForm;