// import { Component } from 'react';
import React, { Component} from 'react';
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
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <h2 className={styles.title}>Please leave feedback</h2>
        <button
          className={styles.btn}
          type="button"
          onClick={() => this.handleFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => this.handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => this.handleFeedback('bad')}
        >
          Bad
        </button>
        <h2 className={styles.title}>Statistics</h2>
      
          <p className={styles.text}>
            Good: <span>{this.state.good}</span>
          </p>
        
          <p className={styles.text}>
            Neutral: <span>{this.state.neutral}</span>
          </p>
       
          <p className={styles.text}>
            Bad: <span>{this.state.bad}</span>
          </p>
        
      </div>
    );
  }
}

export default FeedbackForm;
