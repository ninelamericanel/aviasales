import React, { FC } from 'react';

import { TicketList } from '../TicketList';

import classes from './App.module.scss';

const App: FC = () => {
  return (
    <div className={classes.app}>
      <TicketList />
    </div>
  );
};

export default App;
