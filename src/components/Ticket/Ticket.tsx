import React, { FC } from 'react';

// import classes from './Ticket.module.scss';
import logo from './S7Logo.png';
const Ticket: FC = () => {
  return (
    <div>
      <div className="price">
        <p>13 400 P</p>
      </div>
      <div className="logo">
        <img src={logo}></img>
      </div>
    </div>
  );
};

export default Ticket;
