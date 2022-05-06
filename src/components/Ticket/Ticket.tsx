import React, { FC } from 'react';

import classes from './Ticket.module.scss';
import logo from './S7Logo.png';
const Ticket: FC = () => {
  return (
    <>
      <div className={classes.header}>
        <div className="price">
          <p>13 400 P</p>
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>
      </div>
      <table>
        <tr>
          <th>MOW - HKT</th>
          <th>В пути</th>
          <th>2 пересадки</th>
        </tr>
        <tr>
          <td>10:45 - 08:00</td>
          <td>21ч 15м</td>
          <td>HKG, JNB</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>MOW - HKT</th>
          <th>В пути</th>
          <th>2 пересадки</th>
        </tr>
        <tr>
          <td>10:45 - 08:00</td>
          <td>21ч 15м</td>
          <td>HKG, JNB</td>
        </tr>
      </table>
    </>
  );
};

export default Ticket;
