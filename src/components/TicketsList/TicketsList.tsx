import { FC } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import classesTabs from 'components/Tabs/Tabs.module.scss';
import { CheckboxType, StateType, TabsType, TicketType } from 'types';

import { Ticket } from '../Ticket';

import classes from './TicketsList.module.scss';

interface Props {
  checkboxes: CheckboxType[];
  tickets: TicketType[];
  loading: boolean;
  errorStatus: boolean;
  checkedCheckboxes: number[];
  tabs: TabsType[];
}

const sortByPrice = (a: TicketType, b: TicketType) => {
  if (a.price > b.price) return 1;
  return -1;
};
const sortByDuration = (a: TicketType, b: TicketType) => {
  const durationA = a.segments[0].duration;
  const durationB = b.segments[0].duration;
  if (durationA > durationB) return 1;
  return -1;
};

const sortOptimal = (a: TicketType, b: TicketType) => {
  const durationA = a.segments[0].duration;
  const durationB = b.segments[0].duration;
  if (durationA > durationB && a.price > b.price) return 1;
  return -1;
};

const TicketsList: FC<Props> = ({ tabs, tickets, loading, errorStatus }) => {
  const activeTab = tabs.reduce((id: number, tab) => {
    if (tab.isActive) id += tab.id;
    return id;
  }, 0);
  if (activeTab === 1) tickets.sort(sortByPrice);
  if (activeTab === 2) tickets.sort(sortByDuration);
  if (activeTab === 3) tickets.sort(sortOptimal);
  const spinner =
    loading && !errorStatus ? (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    ) : null;
  const errorMessage = errorStatus ? (
    <Alert type="error" message="Возникла ошибка! Попробуйте перезагрузить страницу" />
  ) : null;
  const ticketsNodes = tickets.map((ticket: TicketType) => {
    const id = new Date(ticket.segments[0].date).getTime() + ticket.segments[0].duration;
    return (
      <li key={id} className={classes.ticket}>
        <Ticket ticket={ticket} />
      </li>
    );
  });
  const ticketsView = tickets.length ? (
    ticketsNodes
  ) : (
    <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" />
  );

  return (
    <>
      <ul className={classes.list}>{spinner || ticketsView || errorMessage}</ul>
      <button className={classesTabs.btn && classes.btnLong}>Показать еще 5 билетов</button>
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

export default connect(mapStateToProps)(TicketsList);
