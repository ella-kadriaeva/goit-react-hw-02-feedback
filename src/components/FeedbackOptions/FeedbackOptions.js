
import React from 'react';
import Statistics from 'components/Statistics/Statistics';

import css from './FeedbackOptions.module.css';
class FeedbackOptions extends React.Component {
    // static defaultProps = {
    // initialValue: 0,
    // }

state = {
    good: 0,
    neutral: 0,
    bad: 0,
}    
    handleGoodFeedback = event => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    }
    handleNeutralFeedback = event => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    }
        handleBadFeedback = event => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    }
    countTotalFeedback = event => {
    
    }
countPositiveFeedbackPercentage = event => {
        
    }
    render() {
        return (
<section className={css.feedback}>
        {<h2 className={css.title}>Please leave feedback</h2>}
            <div className={css.btnBlock}>
                    <button onClick={this.handleGoodFeedback} className={css.btn} type='button'>Good</button>
                    <button onClick={this.handleNeutralFeedback} className={css.btn} type='button'>Neutral</button>
                    <button onClick={this.handleBadFeedback} className={css.btn} type='button'>Bad</button>
            </div>
            <>
                    <Statistics />
            </>

</section>
    )  
    }
}

export default FeedbackOptions;
