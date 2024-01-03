// import { Component } from 'react';
import React, { Component } from 'react';
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
      [type]: prevState[type] + 1,
    }));
  };

  feedbackElements(type, isButton) {
    const feedbackTypes = Object.keys(this.state);
    return feedbackTypes.map(type =>
      isButton ? (
        <button
          key={type}
          className={styles.btn}
          type="button"
          onClick={() => this.handleFeedback(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ) : (
        <p key={type} className={styles.text}>
          {type.charAt(0).toUpperCase() + type.slice(1)}:{' '}
          <span>{this.state[type]}</span>
        </p>
      )
    );
  }

  render() {
    const feedbackTypes = Object.keys(this.state);

    return (
      <div>
        <h2 className={styles.title}>Please leave feedback</h2>

        {this.feedbackElements(feedbackTypes, true)}

        <h2 className={styles.title}>Statistics</h2>

        {this.feedbackElements(feedbackTypes, false)}
      </div>
    );
  }
}

export default FeedbackForm;
