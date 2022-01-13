import React from 'react';

import Notification from './Notification';
import s from './Feedback.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      {good || neutral || bad !== 0 ? (
        <ul>
          <li>
            <span className={s.good}>Good</span> : {good}
          </li>
          <li>
            <span className={s.neutral}> Neutral </span> : {neutral}
          </li>
          <li>
            <span className={s.bad}> Bad </span> : {bad}
          </li>
          <li className={s.total}> Total feedback: {total} </li>
          <li className={s.positivePercentage}> Total good feedback: {positivePercentage}% </li>
        </ul>
      ) : (
        <Notification message="на данный момент отзывов нет! :)" />
      )}
    </div>
  );
}
