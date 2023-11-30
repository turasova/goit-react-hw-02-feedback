import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
const { Component } = require("react");

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleStatisticGood = () => {
        this.setState((prev) => ({
            good: prev.good + 1,
        }))
    }
    handleStatisticNeutral = () => {
        this.setState((prev) => ({
            neutral: prev.neutral + 1,
        }))
    }
    handleStatisticBad = () => {
        this.setState((prev) => ({
            bad: prev.bad + 1,
        }))
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return Math.round(this.state.good * 100 / total);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
         const positivePercentage = this.countPositiveFeedbackPercentage() || 0;
        return <>
            <Section title='Please, leave feedback!'>
                <FeedbackOptions
                    good={this.handleStatisticGood}
                    neutral={this.handleStatisticNeutral}
                    bad={this.handleStatisticBad}
                />
            </Section>
            <Section title='Statistics'>
                   {(total > 0) ? (<Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                    positivePercentage={positivePercentage} />)
                    : (<Notification
                    message='There is no feedback'/>)
                    }          
            </Section>
        </>
    }
}

