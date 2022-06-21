import React, { FC } from 'react';

import { TicketType } from 'types';

import classes from './Ticket.module.scss';

interface Props {
  ticket: TicketType;
}

const checkingSuffix = (length: number) => {
  if (length === 0) return 'Без пересадок';
  if (length === 1) return `${length} пересадка`;
  if (length > 1 && length < 5) return `${length} пересадки`;
};

const formatTime = (time: number) => {
  if (time < 10) return `0${time}`;
  return `${time}`;
};

const arrivalTimeCalculation = (date: string, duration: number): string => {
  const time = new Date(date);
  const arrivedTime = new Date(time.setMinutes(time.getMinutes() + duration));
  return `${formatTime(arrivedTime.getHours())}:${formatTime(arrivedTime.getMinutes())}`;
};

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
      <table className={classes.table}>
        <thead>
          <tr>
            <td>
              {wayTo.origin} - {wayTo.destination}
            </td>
            <td>В пути</td>
            <td>{checkingSuffix(wayTo.stops.length)}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {formatTime(new Date(wayTo.date).getHours())}:{formatTime(new Date(wayTo.date).getMinutes())} -{' '}
              {arrivalTimeCalculation(wayTo.date, wayTo.duration)}
            </td>
            <td>
              {Math.floor(wayTo.duration / 60)}ч {wayTo.duration % 60}м
            </td>
            <td>{wayTo.stops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>
              {wayFrom.origin} - {wayFrom.destination}
            </th>
            <th>В пути</th>
            <th>{checkingSuffix(wayFrom.stops.length)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {formatTime(new Date(wayFrom.date).getHours())}:{formatTime(new Date(wayFrom.date).getMinutes())} -{' '}
              {arrivalTimeCalculation(wayFrom.date, wayFrom.duration)}
            </td>
            <td>
              {Math.floor(wayFrom.duration / 60)}ч {wayFrom.duration % 60}м
            </td>
            <td>{wayFrom.stops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Ticket;
