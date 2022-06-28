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
  checkAll: (array: [] | number[], statusForCheckbox: boolean) => void;
  checkAutomatic: () => void;
  checkboxAll: boolean;
  unCheck: (id: number) => void;
  unCheckAutomatic: () => void;
  getTickets: (searchId: string, stops: number[]) => void;
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
  const sendRequest = () => {
    getSearchId().then((result) => {
      getTickets(result.searchId, isChecked);
    });
  };

  useEffect(() => {
    const allCheckboxIsActive = isChecked.length === checkboxes.length;
    if (allCheckboxIsActive) {
      checkAutomatic();
    }
    if (isChecked.length > 0) sendRequest();
  }, [isChecked]);

  useEffect(() => {
    const unCheckSomeCheckbox = isChecked.length < checkboxes.length;
    if (checkboxAll && unCheckSomeCheckbox) unCheckAutomatic();
  }, [checkboxAll, isChecked]);

  const handleCheckAllFilter = () => {
    if (checkboxAll) {
      checkAll([], false);
    } else {
      checkAll([...checkboxes.map((checkbox) => checkbox.id)], true);
    }
  };

  return (
    <div className={classes.filter}>
      <div className={classes.header}>
        <img className={classes.burger} src={burger} alt="Раскрыть фильтер" />
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <label className={checkboxAll ? classes.labelActive : classes.label}>
        <input className={classes.checkbox} type="checkbox" onChange={handleCheckAllFilter} />
        Все
      </label>
      {checkboxes.map((checkbox) => {
        return (
          <label key={checkbox.id} className={checkbox.isChecked ? classes.labelActive : classes.label}>
            <input
              className={classes.checkbox}
              type="checkbox"
              onChange={() => (checkbox.isChecked ? unCheck(checkbox.id) : check(checkbox.id))}
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
    getTickets: (searchId: string, stops: number[]) => getTicketsThunk(searchId, stops),
    unCheck: (id: number) => unCheckActionCreator(id),
    checkAll: checkAllActionCreator,
    checkAutomatic: checkAutomaticActionCreator,
    unCheckAutomatic: unCheckAutomatic,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
