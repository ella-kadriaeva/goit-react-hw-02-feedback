import React from 'react';
import css from 'components//FeedbackOptions/FeedbackOptions.module.css';

const Statistics = ({onGoodFeedback, onBadFeedback, onNeutralFeedback}) => {
    return (
        <>
        {<h2 className={css.title}>Statistics</h2>}
        <ul className={css.statisticsBlock}>
            <li className={css.item} >Good: {this.state.good}</li>
            <li className={css.item} >Neutral: {this.state.neutral}</li>
            <li className={css.item} >Bad: {this.state.bad}</li>
            <li className={css.item} >Total: {this.state.neutral}</li>
            <li className={css.item} >Positive feedback: {this.state.bad}%</li>
        </ul>
        </>


    )
    
}
export default Statistics;
