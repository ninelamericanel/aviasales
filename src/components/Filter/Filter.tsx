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
  checkAll: (array: [] | number[]) => void;
  checkAutomatic: () => void;
  checkboxAll: boolean;
  unCheck: (id: number) => void;
  unCheckAutomatic: () => void;
  getTickets: (searchId: string, stops: number[]) => void;
  tickets: ObjectTickets;
  setLoad: (active: boolean) => void;
  unCheckAll: () => void;
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
  setLoad,
}) => {
  const sendRequest = () => {
    getSearchId().then((result) => {
      console.log(isChecked, 'isChecked');
      getTickets(result.searchId, isChecked);
    });
  };

  useEffect(() => {
    const allCheckboxIsActive = isChecked.length === checkboxes.length;
    if (allCheckboxIsActive) {
      checkAutomatic();
      sendRequest();
    }
  }, [isChecked]);

  useEffect(() => {
    const unCheckSomeCheckbox = isChecked.length < checkboxes.length;
    if (checkboxAll && unCheckSomeCheckbox) unCheckAutomatic();
  }, [checkboxAll, isChecked]);

  return (
    <div className={classes.filter}>
      <div className={classes.header}>
        <img className={classes.burger} src={burger} alt="Раскрыть фильтер" />
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <label className={checkboxAll ? classes.labelActive : classes.label}>
        <input
          className={classes.checkbox}
          type="checkbox"
          onChange={() => {
            if (checkboxAll) {
              checkAll([]);
            } else {
              checkAll([...checkboxes.map((checkbox) => checkbox.id)]);
              setLoad(true);
            }
          }}
        />
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
                  setLoad(true);
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
    setLoad,
    checkAutomaticActionCreator,
    unCheckActionCreator,
    unCheckAutomatic,
    unCheckAllActionCreator,
  } = bindActionCreators(actions, dispatch);
  const { getTicketsThunk } = bindActionCreators(thunks, dispatch);
  return {
    check: (id: number) => checkActionCreator(id),
    getTickets: (searchId: string, stops: number[]) => getTicketsThunk(searchId, stops),
    unCheck: (id: number) => unCheckActionCreator(id),
    checkAll: checkAllActionCreator,
    checkAutomatic: checkAutomaticActionCreator,
    unCheckAutomatic: unCheckAutomatic,
    setLoad: setLoad,
    unCheckAll: unCheckAllActionCreator,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
