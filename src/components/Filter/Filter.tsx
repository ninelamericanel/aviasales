import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { CheckboxType, StateType } from 'types';
import * as actions from 'store/actions';

import classes from './Filter.module.scss';
import burger from './burger.svg';

interface Props {
  isChecked: number[];
  checkboxes: CheckboxType[];
  check: (id: number) => void;
  checkAll: (array: number[], statusForCheckbox: boolean) => void;
  checkAutomatic: () => void;
  checkboxAll: boolean;
  unCheck: (id: number) => void;
  unCheckAutomatic: () => void;
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
}) => {
  useEffect(() => {
    const allCheckboxIsActive = isChecked.length === checkboxes.length;
    if (allCheckboxIsActive) {
      checkAutomatic();
    }
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
  const { check, checkAll, checkAutomatic, unCheck, unCheckAutomatic } = bindActionCreators(actions, dispatch);
  return {
    check: check,
    unCheck: unCheck,
    checkAll: checkAll,
    checkAutomatic: checkAutomatic,
    unCheckAutomatic: unCheckAutomatic,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
