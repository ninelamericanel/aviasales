import React, { FC, useEffect } from 'react';

import { getSearchId } from 'services/ticketServices';
import { TicketList } from 'components/TicketList';
import { Tabs } from 'components/Tabs';
import { Filter } from 'components/Filter';

import classes from './App.module.scss';
import logo from './Logo.png';

const App: FC = () => {
  useEffect(() => {
    getSearchId().then((r) => {
      const session = localStorage.searchId ? localStorage.searchId : r.searchId;
      localStorage.setItem('searchId', session);
    });
  }, []);

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <a href="#">
          <img src={logo} alt="Aviasales logo"></img>
        </a>
      </header>
      <main className={classes.main}>
        <Tabs />
        <Filter />
        <TicketList />
      </main>
    </div>
  );
};

export default App;
