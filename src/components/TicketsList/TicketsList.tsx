import { FC } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { CheckboxType, StateType, TabsType, TicketType } from 'types';
import { createIdForTicket, sortingTickets } from 'helper';
import { Ticket } from 'components/Ticket';

import classes from './TicketsList.module.scss';

interface Props {
  checkboxes: CheckboxType[];
  tickets: TicketType[];
  loading: boolean;
  errorStatus: boolean;
  checkedCheckboxes: number[];
  tabs: TabsType[];
}

const TicketsList: FC<Props> = ({ checkedCheckboxes, tabs, tickets, loading, errorStatus }) => {
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
  const ticketsNodes = tickets.map((ticket: TicketType) => {
    const infoTicket = ticket.segments[0];
    const id = createIdForTicket(infoTicket.date, infoTicket.duration);
    return (
      <li key={id} className={classes.ticket}>
        <Ticket ticket={ticket} />
      </li>
    );
  });
  const notFound = checkedCheckboxes.length ? null : (
    <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" />
  );
  const ticketsView = !errorStatus && checkedCheckboxes.length ? ticketsNodes : null;

  return (
    <>
      <ul className={classes.list}>
        {spinner}
        {ticketsView || errorMessage || notFound}
      </ul>
      {/*<button className={classesTabs.btn && classes.btnLong}>Показать еще 5 билетов</button>*/}
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
