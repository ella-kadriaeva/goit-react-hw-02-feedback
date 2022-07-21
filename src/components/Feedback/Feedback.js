import PropTypes from 'prop-types';
import React from 'react';
import css from './Feedback.module.css';
class Feedback extends React.Component {
    handleGoodFeedback = event => {

        const { target } = event;
    }
    handleNeutralFeedback = event => {
const { target } = event;
    }
    handleBadFeedback = event => {
const { target } = event;
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
                    <li className={css.item} >Good:</li>
                    <li className={css.item} >Neutral:</li>
                    <li className={css.item} >Bad:</li>
            </ul>
</section>
    )  
    }
}

export default Feedback;
