import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section.js';
import Statistics from './Feedback/Statistics.js';

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
  //   countTotalFeedback = () => {
  //     this.total = prevState.good + prevState.bad + prevState.neutral;
  //   };

  //   countPositiveFeedbackPercentage = () => {
  //     this.setState(prevState => {
  //       return {
  //         positive: (prevState.good * 100) / total,
  //       };
  //     });
  //   };

  render() {
    return (
      //   <div
      //     style={{
      //       height: '100vh',
      //       display: 'flex',
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       fontSize: 40,
      //       color: '#010101',
      //     }}
      //   >
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodFeedback={this.handleGoodFeedback}
            badFeedback={this.handleBadFeedback}
            neutralFeedback={this.handleNeutralFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            onGood={this.state.good}
            onBad={this.state.bad}
            onNeutral={this.state.neutral}
            // total={this.countTotalFeedback}
          />
        </Section>
      </div>
    );
  }
}
export default App;
