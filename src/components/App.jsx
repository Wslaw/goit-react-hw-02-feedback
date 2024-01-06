import React, { Component } from 'react';
import Section from './Feedback/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import styles from './Feedback/feedbackForm.module.css';
import Notification from './Feedback/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={
                total === 0 ? 0 : Math.round((good / total) * 100)
              }
            />
          ) : (
              <div className={styles.result}>
                {<Notification message = "There is no feedback."/>}
              {/* <p className={styles.text}>There is no feedback yet.</p> */}
            </div>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
