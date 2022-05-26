import React, { FC } from 'react';

import { TicketList } from '../TicketList';
import { Tabs } from '../Tabs';

import classes from './App.module.scss';
import logo from './Logo.png';

const App: FC = () => {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <a href="https://www.aviasales.ru/">
          <img src={logo} alt="Aviasales logo"></img>
        </a>
      </header>
      <main className={classes.main}>
        <Tabs />
        <TicketList />
      </main>
    </div>
  );
};

export default App;
