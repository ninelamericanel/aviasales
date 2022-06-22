import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Alert, Spin } from 'antd';

import { Ticket } from 'components/Ticket';
import classesTabs from 'components/Tabs/Tabs.module.scss';
import { CheckboxType, StateType, TicketType } from 'types';

import { getSearchId } from '../../services/ticketServices';
import * as thunks from '../../store/thunks';

import classes from './TicketList.module.scss';

interface Props {
  tickets: TicketType[];
  filter: CheckboxType[];
  filterAll: boolean;
  getTickets: (searchId: string) => void;
  load: boolean;
  error: boolean;
}

const TicketList: FC<Props> = ({ tickets, getTickets, error, load, filterAll }) => {
  useEffect(() => {
    if (filterAll) {
      getSearchId().then((result) => {
        getTickets(result.searchId);
      });
    }
  }, [filterAll]);

  const withoutFilter = !filterAll ? (
    <Alert message="Informational Notes" description="Билеты по заданным фильтрам не найдены" type="info" showIcon />
  ) : null;
  const loader = load ? <Spin className={classes.spinner} size="large" /> : null;
  const errorView = error ? (
    <Alert message="Error" description="Ошибка! попробуйте позже" type="error" showIcon />
  ) : null;

  const elements = tickets.map((item, id) => {
    return (
      <li key={id} className={classes.ticket}>
        <Ticket ticket={item} />
      </li>
    );
  });
  const view = !load && !error && tickets.length > 0 ? elements : null;

  return (
    <>
      <ul className={classes.list}>{withoutFilter || loader || errorView || view}</ul>
      <button className={classesTabs.btn && classes.btnLong}>Показать еще 5 билетов</button>
    </>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    tickets: state.TicketsReducer.tickets,
    filter: state.FilterReducer.checkboxes,
    filterAll: state.FilterReducer.checkboxAll,
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
