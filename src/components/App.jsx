import React, { Component } from 'react';
import Conainer from './Feedback/Container';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiv = (good * 100) / (good + neutral + bad);
    return Math.round(positiv);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Conainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodFeedback={this.handleGoodFeedback}
            badFeedback={this.handleBadFeedback}
            neutralFeedback={this.handleNeutralFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              onGood={good}
              onBad={bad}
              onNeutral={neutral}
              total={total}
              positiv={positive}
            />
          )}
        </Section>
      </Conainer>
    );
  }
}
export default App;
