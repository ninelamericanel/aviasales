import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { CheckboxType, StateType } from 'types';
import * as actions from 'store/actionCreators';

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
    if (isChecked.length === checkboxes.length) checkAutomatic();
  }, [isChecked]);

  useEffect(() => {
    if (checkboxAll && isChecked.length < checkboxes.length) unCheckAutomatic();
  }, [checkboxAll, isChecked]);

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
                if (!isChecked.includes(checkbox.id)) check(checkbox.id);
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
  return {
    check: (id: number) => checkActionCreator(id),
    unCheck: (id: number) => unCheckActionCreator(id),
    checkAll: checkAllActionCreator,
    checkAutomatic: checkAutomaticActionCreator,
    unCheckAutomatic: unCheckAutomatic,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
