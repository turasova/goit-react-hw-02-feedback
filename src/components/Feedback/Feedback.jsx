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

    addFeedback = (option) => {
         this.setState((prev) => ({
            [option]: prev[option] + 1,
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return Math.round(this.state.good * 100 / total) || 0;
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage() || 0;
        const options = Object.keys(this.state);
        return <>
            <Section title='Please, leave feedback!'>
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.addFeedback}
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

