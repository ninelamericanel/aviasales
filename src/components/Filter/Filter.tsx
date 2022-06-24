import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { CheckboxType, ObjectTickets, StateType } from 'types';
import * as actions from 'store/actionCreators';
import * as thunks from 'store/thunks';
import { getSearchId } from 'services/ticketServices';

import classes from './Filter.module.scss';
import burger from './burger.svg';

interface Props {
  isChecked: number[];
  checkboxes: CheckboxType[];
  check: (id: number) => void;
  checkAll: () => void;
  checkAutomatic: () => void;
  checkboxAll: boolean;
  unCheck: (id: number) => void;
  unCheckAutomatic: () => void;
  getTickets: (searchId: string) => void;
  tickets: ObjectTickets;
}

const Filter: FC<Props> = ({
  unCheckAutomatic,
  unCheck,
  isChecked,
  checkboxes,
  checkAutomatic,
  checkboxAll,
  check,
  checkAll,
  getTickets,
}) => {
  useEffect(() => {
    if (isChecked.length === checkboxes.length) checkAutomatic();
  }, [isChecked]);

  useEffect(() => {
    if (checkboxAll && isChecked.length < checkboxes.length) unCheckAutomatic();
  }, [checkboxAll, isChecked]);

  const sendRequest = () => {
    getSearchId().then((result) => {
      getTickets(result.searchId);
    });
  };

  return (
    <div className={classes.filter}>
      <div className={classes.header}>
        <img className={classes.burger} src={burger} alt="Раскрыть фильтер" />
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <label className={checkboxAll ? classes.labelActive : classes.label}>
        <input className={classes.checkbox} type="checkbox" onChange={checkAll} />
        Все
      </label>
      {checkboxes.map((checkbox) => {
        return (
          <label key={checkbox.id} className={isChecked.includes(checkbox.id) ? classes.labelActive : classes.label}>
            <input
              className={classes.checkbox}
              type="checkbox"
              onChange={() => {
                if (isChecked.includes(checkbox.id)) unCheck(checkbox.id);
                if (!isChecked.includes(checkbox.id)) {
                  check(checkbox.id);
                  sendRequest();
                }
              }}
            />
            {checkbox.name}
          </label>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    isChecked: state.FilterReducer.isChecked,
    checkboxes: state.FilterReducer.checkboxes,
    checkboxAll: state.FilterReducer.checkboxAll,
    tickets: state.TicketsReducer.tickets,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    checkActionCreator,
    checkAllActionCreator,
    checkAutomaticActionCreator,
    unCheckActionCreator,
    unCheckAutomatic,
  } = bindActionCreators(actions, dispatch);
  const { getTicketsThunk } = bindActionCreators(thunks, dispatch);
  return {
    check: (id: number) => checkActionCreator(id),
    getTickets: getTicketsThunk,
    unCheck: (id: number) => unCheckActionCreator(id),
    checkAll: checkAllActionCreator,
    checkAutomatic: checkAutomaticActionCreator,
    unCheckAutomatic: unCheckAutomatic,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
