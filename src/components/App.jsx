import { Component } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedback() {
    return Number(((this.good / this.countTotalFeedback()) * 100).toFixed());
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedback()}
          />
        </Section>
      </>
    );
  }
}

export default App;
