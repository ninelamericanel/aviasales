import React, { FC } from 'react';

import { TicketType } from 'types';
import { arrivalTimeCalculation, checkingSuffix, formatTime } from 'helper';

import classes from './Ticket.module.scss';

interface Props {
  ticket: TicketType;
}

const Ticket: FC<Props> = ({ ticket: { price, carrier, segments } }) => {
  const wayTo = segments[0];
  const wayFrom = segments[1];

  return (
    <>
      <div className={classes.header}>
        <div className={classes.price}>
          <p>{price} P</p>
        </div>
        <div className={classes.logo}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`}></img>
        </div>
      </div>
      <div className={classes.table}>
        <div className={`${classes.thead1} ${classes.thead}`}>
          {wayTo.origin} - {wayTo.destination}
        </div>
        <div className={`${classes.tbody1} ${classes.tbody}`}>
          {formatTime(new Date(wayTo.date).getHours())}:{formatTime(new Date(wayTo.date).getMinutes())} -{' '}
          {arrivalTimeCalculation(wayTo.date, wayTo.duration)}{' '}
        </div>
        <div className={`${classes.thead2} ${classes.thead}`}>В пути</div>
        <div className={`${classes.tbody2} ${classes.tbody}`}>
          {Math.floor(wayTo.duration / 60)}ч {wayTo.duration % 60}
        </div>
        <div className={`${classes.thead3} ${classes.thead}`}>{checkingSuffix(wayTo.stops.length)}</div>
        <div className={`${classes.tbody3} ${classes.tbody}`}>{wayTo.stops.join(', ')}</div>
      </div>
      <div className={classes.table}>
        <div className={`${classes.thead1} ${classes.thead}`}>
          {wayFrom.origin} - {wayTo.destination}
        </div>
        <div className={`${classes.tbody1} ${classes.tbody}`}>
          {formatTime(new Date(wayFrom.date).getHours())}:{formatTime(new Date(wayFrom.date).getMinutes())} -{' '}
          {arrivalTimeCalculation(wayFrom.date, wayFrom.duration)}
        </div>
        <div className={`${classes.thead2} ${classes.thead}`}>В пути</div>
        <div className={`${classes.tbody2} ${classes.tbody}`}>
          {Math.floor(wayFrom.duration / 60)}ч {wayFrom.duration % 60}м
        </div>
        <div className={`${classes.thead3} ${classes.thead}`}>{checkingSuffix(wayFrom.stops.length)}</div>
        <div className={`${classes.tbody3} ${classes.tbody}`}>{wayFrom.stops.join(', ')}</div>
      </div>
    </>
  );
};

export default Ticket;
