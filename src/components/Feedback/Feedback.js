import PropTypes from 'prop-types';
import React from 'react';
import css from './Feedback.module.css';
class Feedback extends React.Component {
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

    render() {
        return (
<section className={css.feedback}>
        {<h2 className={css.title}>Please leave feedback</h2>}
            <div className={css.btnBlock}>
                    <button onClick={this.handleGoodFeedback} className={css.btn} type='button'>Good</button>
                    <button onClick={this.handleNeutralFeedback} className={css.btn} type='button'>Neutral</button>
                    <button onClick={this.handleBadFeedback} className={css.btn} type='button'>Bad</button>
            </div>
            
        {<h2 className={css.title}>Statistics</h2>}
            <ul className={css.statisticsBlock}>
                    <li className={css.item} >Good: {this.state.good}</li>
                    <li className={css.item} >Neutral: {this.state.neutral}</li>
                    <li className={css.item} >Bad: {this.state.bad}</li>
            </ul>
</section>
    )  
    }
}

export default Feedback;
