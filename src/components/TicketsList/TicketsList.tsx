import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import Box from '@mui/material/Box';
import uniqid from 'uniqid';
import LinearProgress from '@mui/material/LinearProgress';
import { bindActionCreators, Dispatch } from 'redux';

import * as thunks from 'store/thunks';
import * as action from 'store/actions';
import { CheckboxType, StateType, TabsType, TicketType } from 'types';
import { sortingTickets } from 'helper';
import { Ticket } from 'components/Ticket';
import classesTabs from 'components/Tabs/Tabs.module.scss';

import 'antd/dist/antd.css';
import classes from './TicketsList.module.scss';

interface Props {
  checkboxes: CheckboxType[];
  tickets: TicketType[];
  loading: boolean;
  errorStatus: boolean;
  checkedCheckboxes: number[];
  tabs: TabsType[];
  getTickets: () => void;
  incViewTickets: (count?: number) => void;
  countTickets: number;
  preloading: boolean;
}

interface PropsTicketsList {
  maxViewTickets: number;
  tickets: TicketType[];
}

const TicketsList: FC<PropsTicketsList> = ({ tickets, maxViewTickets }) => {
  const ticketsNodes = tickets.slice(0, maxViewTickets).map((ticket: TicketType) => {
    return (
      <li key={uniqid()} className={classes.ticket}>
        <Ticket ticket={ticket} />
      </li>
    );
  });

  return (
    <>
      <ul className={classes.list}>{ticketsNodes}</ul>
    </>
  );
};

const TicketsListContainer: FC<Props> = ({
  incViewTickets,
  getTickets,
  tabs,
  tickets,
  loading,
  errorStatus,
  checkedCheckboxes,
  countTickets,
  preloading,
}) => {
  useEffect(() => {
    getTickets();
  }, []);
  useEffect(() => {
    incViewTickets(5);
  }, [tabs, checkedCheckboxes]);
  const preloadingView = preloading ? <Spin className={classes.spin} size="large" /> : null;
  let filtredTickets = tickets;
  const activeTab = tabs.reduce((id: number, tab) => {
    if (tab.isActive) id += tab.id;
    return id;
  }, 0);
  checkedCheckboxes.forEach((stopsId) => {
    filtredTickets = tickets.filter((item) => item.segments[0].stops.length === stopsId);
  });
  if (activeTab) sortingTickets(activeTab, filtredTickets);
  const handleClick = () => incViewTickets();
  const btn =
    checkedCheckboxes.length > 0 && tickets.length > 0 ? (
      <button className={classesTabs.btn && classes.btnLong} onClick={handleClick}>
        Показать еще 5 билетов
      </button>
    ) : null;
  const spinner =
    loading && !errorStatus ? (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    ) : null;
  const viewTickets = !checkedCheckboxes.length ? (
    <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" />
  ) : (
    <TicketsList tickets={filtredTickets} maxViewTickets={countTickets} />
  );
  const errorMessage = errorStatus ? (
    <Alert type="error" message="Возникла ошибка при загрузке билетов! Попробуйте перезагрузить страницу" />
  ) : null;
  return (
    <div className={classes.container}>
      {preloadingView}
      {spinner || errorMessage}
      {viewTickets}
      {btn}
    </div>
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
    countTickets: state.TicketsReducer.countTicketsView,
    preloading: state.TicketsReducer.preloading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { getTicketsThunk } = bindActionCreators(thunks, dispatch);
  const { incViewTickets } = bindActionCreators(action, dispatch);
  return {
    getTickets: getTicketsThunk,
    incViewTickets: incViewTickets,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsListContainer);
