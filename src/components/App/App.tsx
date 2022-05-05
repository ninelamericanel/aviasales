import React, { FC } from 'react';

import { TicketList } from '../TicketList';

import classes from './App.module.scss';

const App: FC = () => {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <a href="https://www.aviasales.ru/">
          <img src="./Logo.svg" alt="Aviasales logo"></img>
        </a>
      </header>
      <main className={classes.main}>
        <TicketList />
      </main>
    </div>
  );
};

export default App;
