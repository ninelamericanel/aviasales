import React, { FC } from 'react';
import './Ticket.module.scss';

const Ticket: FC = () => {
  return (
    <div className="header">
      <div className="price">
        <p>13 400 P</p>
      </div>
      <div className='logo'>
        <img></img>
      </div>
    </div>

  )
}

export default Ticket;