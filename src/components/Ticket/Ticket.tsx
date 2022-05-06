import React, { FC } from 'react';

import classes from './Ticket.module.scss';
import logo from './S7Logo.png';

const Ticket: FC = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.price}>
          <p>13 400 P</p>
        </div>
        <div className={classes.logo}>
          <img src={logo}></img>
        </div>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>MOW - HKT</td>
            <td>В пути</td>
            <td>2 пересадки</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:45 - 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>MOW - HKT</th>
            <th>В пути</th>
            <th>2 пересадки</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:45 - 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Ticket;
