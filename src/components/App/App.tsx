import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Spin, Alert } from 'antd';
import 'antd/dist/antd.css';

import { TicketList } from 'components/TicketList';
import { Tabs } from 'components/Tabs';
import { Filter } from 'components/Filter';
import { getSearchId } from 'services/ticketServices';
import * as thunks from 'store/thunks';
import { StateType } from 'types';

import classes from './App.module.scss';
import logo from './Logo.png';

interface Props {
  getTickets: (searchId: string) => void;
  load: boolean;
  error: boolean;
}

const App: FC<Props> = ({ getTickets, error, load }) => {
  useEffect(() => {
    getSearchId().then((result) => {
      getTickets(result.searchId);
    });
  }, []);

  const loader = load ? <Spin className={classes.spinner} size="large" /> : null;
  const errorView = error ? (
    <Alert message="Error" description="Ошибка! попробуйте позже" type="error" showIcon />
  ) : null;
  const view = !load && !error ? <TicketList tickets={[]} /> : null;

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
        {loader || errorView || view}
      </main>
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    load: state.TicketsReducer.load,
    error: state.TicketsReducer.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { getTicketsThunk } = bindActionCreators(thunks, dispatch);
  return {
    getTickets: getTicketsThunk,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
