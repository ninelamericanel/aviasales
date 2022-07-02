import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { bindActionCreators, Dispatch } from 'redux';

import * as thunks from 'store/thunks';
import { CheckboxType, StateType, TabsType, TicketType } from 'types';
import { createIdForTicket, sortingTickets } from 'helper';
import { Ticket } from 'components/Ticket';
import classesTabs from 'components/Tabs/Tabs.module.scss';

import classes from './TicketsList.module.scss';

interface Props {
  checkboxes: CheckboxType[];
  tickets: TicketType[];
  loading: boolean;
  errorStatus: boolean;
  checkedCheckboxes: number[];
  tabs: TabsType[];
  getTickets: () => void;
}

const TicketsList: FC<Props> = ({ getTickets, tabs, tickets, loading, errorStatus }) => {
  useEffect(() => {
    getTickets();
  }, []);

  const activeTab = tabs.reduce((id: number, tab) => {
    if (tab.isActive) id += tab.id;
    return id;
  }, 0);
  if (activeTab) sortingTickets(activeTab, tickets);
  const spinner =
    loading && !errorStatus ? (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    ) : null;
  const errorMessage = errorStatus ? (
    <Alert type="error" message="Возникла ошибка! Попробуйте перезагрузить страницу" />
  ) : null;
  const ticketsNodes = tickets.slice(0, 5).map((ticket: TicketType) => {
    const infoTicket = ticket.segments[0];
    const id = createIdForTicket(infoTicket.date, infoTicket.duration);
    return (
      <li key={id} className={classes.ticket}>
        <Ticket ticket={ticket} />
      </li>
    );
  });
  // const notFound = checkedCheckboxes.length ? null : (
  //   <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" />
  // );
  // const ticketsView = !errorStatus && checkedCheckboxes.length ? ticketsNodes : null;

  return (
    <>
      <ul className={classes.list}>
        {spinner}
        {ticketsNodes || errorMessage}
      </ul>
      <button className={classesTabs.btn && classes.btnLong} onClick={}>
        Показать еще 5 билетов
      </button>
    </>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    checkboxes: state.FilterReducer.checkboxes,
    tickets: state.TicketsReducer.tickets,
    checkedCheckboxes: state.FilterReducer.isChecked,
    loading: state.TicketsReducer.load,
    errorStatus: state.TicketsReducer.error,
    tabs: state.TabsReducer.tabs,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { getTicketsThunk } = bindActionCreators(thunks, dispatch);
  return {
    getTickets: getTicketsThunk,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
